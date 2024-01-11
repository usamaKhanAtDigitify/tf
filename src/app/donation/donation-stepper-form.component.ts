import { Component,OnInit} from '@angular/core';
import { BasketService } from '../core/service/basket.service';
import { ToastService } from '../core/service/toast.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-donation-stepper-form',
  templateUrl: './donation-stepper-form.component.html',
  styleUrls: ['./donation-stepper-form.component.scss'],
})
export class DonationStepperFormComponent implements OnInit {
  formSteps = [
    {
      stepNumber: 0,
      title: 'Donation',
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    },
    {
      stepNumber: 1,
      title: 'Payment Method',
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    },
    {
      stepNumber: 2,
      title: 'Confirmation',
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    },
  ];
  activeStep: number = 0;
  moveRightTemp: boolean = false;
  isCurrentStepCompleted = true;
  ishideSteperForm:boolean = true;
  donationObj: any = {};
  paymentObj: any = {};
  selectedProducts: any = [];
  constructor(private basketService: BasketService, private toastSvc:ToastService, private router :Router) {}

  ngOnInit(): void {
  }
  tempMoveRight() {
    this.basketService.moveNext$.next({isMoveNext:true, activeStep:this.activeStep});
  }
  moveRight(obj: any) {
    if (!obj.event && this.activeStep == obj.activeStep) {
      this.isCurrentStepCompleted = false;
      return;
    }

    if (this.activeStep !== obj.activeStep) {
      this.isCurrentStepCompleted = false;
      return;
    }
    if(obj.activeStep == 0){
      this.selectedProducts = obj.products; 
      obj.products = obj.products.map((product: any) => ({
          productId: product.id,
          plaqueContent: product.attributes.donationOnBehalf,
          quantity: product.attributes.quantity,
        })
      ),
      this.donationObj = obj;
      this.moveToNextSetup(obj);
    }
    else {
       this.paymentObj = obj;
    }
    let newObj:any = {...this.donationObj, ...this.paymentObj}
    const payload = {
      email:newObj.email,
      currency:newObj.currency,
      recurring:newObj.recurring,
      customerType:newObj.customerType,
      isGiftAid:newObj.isGiftAid,
      paymentProcessor:newObj.paymentProcessor,
      businessName:newObj.businessName,
      taxId:newObj.taxId,
      firstName:newObj.firstName,
      lastName:newObj.lastName,
      addressLine1:newObj.addressLine1,
      addressLine2:newObj.addressLine2,
      city:newObj.city,
      state:newObj.state,
      country:newObj.country,
      zipCode:newObj.zip,
      products:newObj.products
    }
    localStorage.setItem('email', payload.email)
    if(obj.activeStep == 1) {
     // localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts))
      this.toastSvc.loaderObject$.next(true);
      this.toastSvc.gotoTop();
      this.basketService.stipePayment(payload).subscribe((resp:any) => {
        if(resp.data.url) {
          window.location.href = resp.data.url;
          this.toastSvc.loaderObject$.next(false);
        }
      },(error) => {
        this.toastSvc.loaderObject$.next(false);
      })
    }
  
  }
   moveToNextSetup(obj:any){
    if(obj.products.length == 0){
      this.toastSvc.showError('Please choose a product')
      return
    }
    this.isCurrentStepCompleted = true;
    this.formSteps[this.activeStep].visited = true;
    if (this.activeStep < this.formSteps.length - 1) {
      this.formSteps[this.activeStep].moveFormLeft = true;
      this.formSteps[this.activeStep + 1].moveFormRight = false;
      this.activeStep += 1;
      this.gotoTop();
    }
   }


  moveLeft() {
    if (this.activeStep > 0) {
      this.formSteps[this.activeStep - 1].moveFormLeft = false;
      this.formSteps[this.activeStep].moveFormRight = true;
      this.activeStep -= 1;
    }else{
      this.router.navigate(['/index'])
    }
  }

  gotoTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
}
