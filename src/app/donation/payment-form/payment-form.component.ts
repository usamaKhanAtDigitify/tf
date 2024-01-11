import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder,  FormControl, FormGroup,NgForm,  Validators} from '@angular/forms';
import { BasketService } from 'src/app/core/service/basket.service';
import { LocalStorageService } from 'src/app/core/service/localstorage.service';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit, OnChanges {
  @Output() readyToMove = new EventEmitter<{}>();
  userType: string = 'individual';
  paymentForm!: FormGroup;
  submitted: boolean = false;
  isGiftaidSelected: boolean = false;
  showForm: boolean = false;
  selectedPaymenttype:string ='stripe';
  totalAmount: number = 0;
  taxedAmount: number = 0;
  selectedCurrency: string = '';
  @ViewChild('emailForm') childForm!: NgForm;

 constructor(
  private fb: FormBuilder,
  private basketSvc: BasketService,
  private localStoragService: LocalStorageService,
  private toastSvc:ToastService
  ) {}

  ngOnInit() {      
    
    this.selectedCurrency = this.localStoragService.getItem('currency_symbol');
   
    this.basketSvc.moveNext$.subscribe((obj:any) => {
      this.totalAmount = Math.round((this.basketSvc.getTotalAmount()) * 100) / 100 ; ;
      this.taxedAmount =   Math.round((this.totalAmount + (0.25 * this.totalAmount)) * 100) / 100 ;
      

    //   if(obj.isMoveNext && obj.activeStep == 1) {
    //     if(this.childForm.invalid || (this.isGiftaidSelected && this.paymentForm.invalid)) {
    //       this.submitted = true;
    //       this.childForm.touched;
    //       return 
    //      }
    //      else {
    //       if(this.isGiftaidSelected && this.paymentForm)
    //       this.readyToMove.emit({
    //         event: true, activeStep: 1, 
    //         email:this.childForm.value.email,
    //         ...this.paymentForm.value,
    //         addressLine2: 'address',
    //         isGiftAid:this.isGiftaidSelected,
    //         customerType: this.userType,
    //         paymentProcessor:(this.selectedPaymenttype === 'apple' || this.selectedPaymenttype === 'paybarcard') ?'stripe' : this.selectedPaymenttype 
    //       });
    //       else   
    //        this.readyToMove.emit({
    //         event: true, activeStep: 1, 
    //         email:this.childForm.value.email,
    //         isGiftAid:this.isGiftaidSelected,
    //         customerType: this.userType,
    //         paymentProcessor:(this.selectedPaymenttype === 'apple' || this.selectedPaymenttype === 'paybarcard') ? 'stripe' : this.selectedPaymenttype 
    //       });
    //      }
    //  }
     })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
 
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  createPaymentForm() {
    this.paymentForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(1)]),
      addressLine1: new FormControl('', [Validators.required,Validators.minLength(1)]),
     // addressLine2: new FormControl('',[Validators.required,Validators.minLength(1)]),
      city: new FormControl('', [Validators.required,Validators.minLength(1)]),
      state: new FormControl('', [Validators.required,Validators.minLength(1)]),
      zip: new FormControl('', [Validators.required, Validators.pattern(/^\d{5}$/)]),
      country: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });
  }

  addControlOnBusinessSelect() {
    if (this.userType === 'business') {
      this.paymentForm?.addControl(
        'businessName',
        this.fb.control('', [Validators.required,Validators.minLength(3)])
      );
      this.paymentForm?.addControl(
        'taxId',
        this.fb.control('', [Validators.required,Validators.pattern(/^[a-zA-Z0-9]*$/),Validators.minLength(4),Validators.maxLength(10)])
      );
    } else {
      this.paymentForm?.removeControl('businessName');
      this.paymentForm?.removeControl('taxId');
    }
  }

  get fc(): { [key: string]: AbstractControl } {
    return this.paymentForm?.controls;
  }
  

  onSelectUserType(param: string) {
    this.userType = param;
    if (!this.isGiftaidSelected) return;
    else this.addControlOnBusinessSelect();
  }

  onSelectGiftaid(event: any) {
    if (event.target.checked) {
      this.createPaymentForm();
      this.showForm = true;
      this.isGiftaidSelected = true;
    } else {
      this.showForm = false;
      this.isGiftaidSelected = false;
       Object.keys(this.paymentForm.controls).forEach((key) =>
         this.paymentForm.removeControl(key)
       );
    }

    this.addControlOnBusinessSelect();
  }
  validateConfirmEmail(form: any) {
    const email = form.value.email;
    const confirmEmail = form.value.confirmEmail;
    if (email !== confirmEmail) {
      form.controls['confirmEmail'].setErrors({ incorrect: true });
    } else {
      form.controls['confirmEmail'].setErrors(null);
    }
  }

  onSelectPaymentMethod(paymenttype:any){
    if(this.childForm.invalid || (this.isGiftaidSelected && this.paymentForm.invalid)) {
       this.submitted = true;
       this.childForm.touched;
        return 
      } else {
              if(this.isGiftaidSelected && this.paymentForm)
              this.readyToMove.emit({
                event: true, activeStep: 1, 
                email:this.childForm.value.email,
                ...this.paymentForm.value,
                addressLine2: 'address',
                isGiftAid:this.isGiftaidSelected,
                customerType: this.userType,
                paymentProcessor: paymenttype
              });
              else   
               this.readyToMove.emit({
                event: true, activeStep: 1, 
                email:this.childForm.value.email,
                isGiftAid:this.isGiftaidSelected,
                customerType: this.userType,
                paymentProcessor: paymenttype 
              });
          }

    //   this.gotoTop();
    // this.toastSvc.loaderObject$.next(true);
    // const newObj = {...this.childForm.value, ...this.donation, ...this.paymentForm?.value}
    // const payload = {
    //   email:newObj.email,
    //   currency:newObj.currency,
    //   recurring:newObj.recurring,
    //   customerType:newObj.customerType?newObj.customerType :this.userType,
    //   isGiftAid:newObj.isGiftAid ? newObj.isGiftAid :false,
    //   paymentProcessor: paymenttype,
    //   businessName:newObj.businessName,
    //   taxId:newObj.taxId,
    //   firstName:newObj.firstName,
    //   lastName:newObj.firstName,
    //   addressLine1:newObj.addressLine1,
    //   addressLine2:newObj.addressLine2 ? newObj.addressLine2:'address',
    //   city:newObj.city,
    //   state:newObj.state,
    //   country:newObj.country,
    //   zipCode:newObj.zip,
    //   products:newObj.products
    // }
    // localStorage.setItem('email', payload.email)
   
    // this.basketSvc.stipePayment(payload).subscribe((resp:any) => {
    //   if(resp.data.url) {
    //     window.location.href = resp.data.url;
    //      this.toastSvc.loaderObject$.next(false);
    //   }
    // },(error) => {
    //    this.toastSvc.loaderObject$.next(false);
    // })
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
