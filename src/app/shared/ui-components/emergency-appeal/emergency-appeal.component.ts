import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { BasketService } from 'src/app/core/service/basket.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { TopHeaderService } from '../../../core/service/top-header.service';

@Component({
  selector: 'app-emergency-appeal',
  templateUrl: './emergency-appeal.component.html',
  styleUrls: ['./emergency-appeal.component.scss'],
})
export class EmergencyAppealComponent implements OnInit, AfterViewInit {

  @ViewChild('slider') slider: ElementRef | undefined;
  @ViewChild('product') product: ElementRef | undefined;
  @Input() productList: any;
  currentDate: Date = new Date();
  productDetail: any;
  currencySymbol: string | null = '';
  currency: string | null = '';
  rateAmount: number = 0;
  productRateList: any;
  constructor(private basketSvc: BasketService, private toastService: ToastService, private topHeaderService: TopHeaderService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCurrencyHandler();
  }
  
  ngAfterViewInit(): void {
    if (this.slider !== undefined) {
      // this.slider.nativeElement.scrollLeft = this.slider?.nativeElement.offsetWidth;
      console.log(this.slider.nativeElement.scrollLeft);
    }
  }

  getCurrencyHandler() {
    this.topHeaderService.getCurrencyData()?.subscribe((value: any) => {
      this.currencySymbol = value?.attributes?.symbol;
      this.currency = value?.attributes?.name;
      const rate = this.topHeaderService.getRateData();
      this.rateAmount = rate?.attributes[this.currency as any];
      this.productListRateHandler();
    });
  }

  nextSlider() {
    console.log(this.product?.nativeElement.offsetWidth)
    if (this.slider !== undefined) this.slider.nativeElement.scrollLeft += this.product?.nativeElement.offsetWidth + 20;
  }

  prevSlider() {
    if (this.slider !== undefined) this.slider.nativeElement.scrollLeft -= this.product?.nativeElement.offsetWidth + 20;
  }
  calculateDaysLeft(date: string) {
    const endDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = endDate.getTime() - currentDate.getTime();
    // Calculate the number of days
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  showProductDetail(product: any) {
    this.productDetail = product;
  }

  productListRateHandler() {
    this.productRateList = JSON.parse(JSON.stringify(this.productList));
    this.productRateList.forEach((value: any) => {
      if (this.rateAmount) {
        value.attributes.donated = Math.round(value.attributes.donated * this.rateAmount);
        value.attributes.target = Math.round(value.attributes.target * this.rateAmount);
      }
    })
  }

  addToBasket(productObj: any): void {
    // Add product to the basket
    if (this.currency) {
      if (this.currencySymbol) {
        productObj.attributes.quantity = 1;
        productObj.attributes.donationOnBehalf = 'For the seek of ALLAH';
        productObj.attributes.currency = this.currency;
        productObj.attributes.symbol = this.currencySymbol;
        if(productObj.attributes.fixedPrice)
            productObj.attributes.donatedAmount = Math.round((productObj.attributes.amount * this.rateAmount) * 100) / 100;
          else{
            productObj.attributes.donatedAmount = productObj.attributes.amount;
            productObj.attributes.amountWithSymbol = `${productObj.attributes.symbol}${productObj.attributes.donatedAmount}`
          }
        this.basketSvc.addToBasket(productObj);
        this.toastService.showSuccess(productObj.attributes.title + ' added in basket')

      }
      else {
        this.toastService.showError('Please Select Symbol')
      }
    }
    else {
      this.toastService.showError('Please Select Currency')
    }
  }
}
