import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketService } from 'src/app/core/service/basket.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { TopHeaderService } from 'src/app/core/service/top-header.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  @Output() readyToMove = new EventEmitter<{}>();
  public products: any[] = [];
  public productsRateList: any[] = [];
  public addOnsProduct: any = [];
  public selectdProducts: any[] = [];
  totalPrice: number = 0;
  addonsTotalPrice: number = 0;
  selectedFrequncy: string = 'one_time';
  currencySymbol: any = '';
  currency: any = '';
  rateAmount: number = 0;
  selectedFrequncyNote: string =
    'This is a one-off donation, you will donate only once';

  constructor(private basketSvc: BasketService, private toastService: ToastService, private topHeaderService: TopHeaderService) { }

  ngOnInit(): void {
    this.currencySymbol = localStorage.getItem('currency_symbol');
    this.selectdProducts = this.basketSvc.getItems();
    this.products = this.basketSvc.getItems();
  
    this.getCurrencyHandler();
  
    this.basketSvc.getaddOnProduct().subscribe((resp: any) => {
      let addOnsProductList = resp.data;
      addOnsProductList.map((addons: any) => {
        addons.attributes.checked = false;
        addons.attributes.quantity = 1;
        addons.attributes.donationOnBehalf = 'For the seek of ALLAH';
        addons.attributes.symbol = this.currencySymbol;
        if(addons.attributes.fixedPrice){
          addons.attributes.donatedAmount = addons.attributes.amount * this.rateAmount;
          addons.attributes.donatedAmount = this.roundNumberHandler(addons.attributes.donatedAmount);
        }else{
          addons.attributes.donatedAmount = addons.attributes.amount;
          addons.attributes.amountWithSymbol = `${this.currencySymbol}${addons.attributes.donatedAmount}`;
        }
      });

      this.addOnsProduct = addOnsProductList;
    });
    this.onProductSelect();

    this.basketSvc.moveNext$.subscribe((obj: any) => {
      if (obj.isMoveNext && obj.activeStep == 0) {
        let isdonationOnBehalfEmpty = true;
        this.selectdProducts.map((obj) => {
        if (obj.attributes.donationOnBehalf === '') isdonationOnBehalfEmpty = false;
        });
        this.basketSvc.updateTotalAmount(this.totalPrice);
        this.readyToMove.emit({
          event: isdonationOnBehalfEmpty,
          activeStep: 0,
          currency: this.currency,
          recurring: this.selectedFrequncy,
          products: this.products
        });
      }
    });
  }

  getCurrencyHandler() {

    this.topHeaderService.getCurrencyData().subscribe((value: any) => {
      this.currencySymbol = value?.attributes?.symbol;
      this.currency = value?.attributes?.name;
      const rate = this.topHeaderService.getRateData();
      this.rateAmount = rate?.attributes[this.currency as any];
      this.addOnsProduct.map((addons: any) => {
        if(addons.attributes.fixedPrice){
          addons.attributes.donatedAmount = addons.attributes.amount * this.rateAmount;
          addons.attributes.donatedAmount = this.roundNumberHandler(addons.attributes.donatedAmount);
        }
        else{
          addons.attributes.donatedAmount = addons.attributes.amount;
          addons.attributes.amountWithSymbol = `${this.currencySymbol}${addons.attributes.donatedAmount}`;
        }
      });
       
      this.onProductSelect();

    });
  }

  deleteProduct(id: number, index: number) {
    this.totalPrice -= this.products[index].attributes.donatedAmount;
    this.basketSvc.removeFromBasket(index);
    this.products.splice(index, 1);
    this.selectdProducts.splice(index, 1);
  }

  increaseAmountByOne(id: number, index: number) {
    this.products[index].attributes.quantity += 1;
    this.products[index].attributes.donatedAmount += 1;
    this.products[index].attributes.amountWithSymbol = `${this.products[index].attributes.symbol}${this.products[index].attributes.donatedAmount}`;
    this.totalPrice += 1;
  }

  decreaseAmountByOne(id: number, index: number) {
    if (this.products[index].attributes.quantity > 1) {
      this.products[index].attributes.quantity -= 1;
      this.products[index].attributes.donatedAmount -= 1;
      this.products[index].attributes.amountWithSymbol = `${this.products[index].attributes.symbol}${this.products[index].attributes.donatedAmount}`;
      this.totalPrice -= 1;
    }
  }

  decreaseQuantityByOne(id: number, index: number) {
    if (this.products[index].attributes.quantity > 1) {
      this.products[index].attributes.quantity -= 1;
      this.products[index].attributes.donatedAmount -= this.products[index].attributes.amount * this.rateAmount;
      this.products[index].attributes.donatedAmount = this.roundNumberHandler(this.products[index].attributes.donatedAmount)
      this.totalPrice -= this.products[index].attributes.amount * this.rateAmount;
    //  this.basketSvc.decreaseQuantityByOne(id, index, this.rateAmount)
    }
  }

  increaseQuantityByOne(id: number, index: number) {
    this.products[index].attributes.quantity += 1;
    this.products[index].attributes.donatedAmount += this.products[index].attributes.amount * this.rateAmount; 
    this.products[index].attributes.donatedAmount = this.roundNumberHandler(this.products[index].attributes.donatedAmount)   
    this.totalPrice += this.products[index].attributes.amount * this.rateAmount;

    //this.basketSvc.increaseQuantityByOne(id, index, this.rateAmount) 
  }

  onChangeAmount(event: any, id: number, index: number) {
    let enteredAmount = Number(event.match(/(\d+)/)[0]);
    let previouesAmount = this.products[index].attributes.donatedAmount;

    this.products[index].attributes.donatedAmount = enteredAmount;
    this.products[index].attributes.quantity = enteredAmount;

    if (this.products[index].attributes.donatedAmount > previouesAmount)
      this.totalPrice += (enteredAmount - previouesAmount);
    else
      this.totalPrice -= (previouesAmount - enteredAmount);

  }

  onProductSelect() {
    this.totalPrice = 0;
    this.selectdProducts.forEach((product: any) => {
        this.totalPrice += product.attributes.donatedAmount;
    });
  }

  onAddonSelect(event: any, index: number) {
    if (event.target.checked) {
        this.addonsTotalPrice += this.addOnsProduct[index].attributes.amount * this.rateAmount;
        this.addOnsProduct[index].attributes.checked = true;
    } else {
        this.addonsTotalPrice -= this.addOnsProduct[index].attributes.amount * this.rateAmount;
        this.addOnsProduct[index].attributes.checked = false;
    }

  }

  addAddonsInBasket() {
    this.addOnsProduct.map((product: any) => {
      if (product.attributes.checked) {
        this.products.push(product);
        this.selectdProducts.push(product);
        product.attributes.checked = false;
        this.totalPrice += product.attributes.donatedAmount;
        this.addonsTotalPrice -= product.attributes.amount * this.rateAmount;
        this.basketSvc.addToBasket(product);
        this.toastService.showSuccess(product.attributes.title + ' added in basket')
      }
    });
  }

  onSelectFrequency(frequncy: string) {
    this.selectedFrequncy = frequncy;
    if (this.selectedFrequncy == 'one_time')
      this.selectedFrequncyNote =
        'This is a one-off donation, you will donate only once';
    else if (this.selectedFrequncy == 'week')
      this.selectedFrequncyNote = 'You will donate this amount every week, ';
    else if (this.selectedFrequncy == 'month')
      this.selectedFrequncyNote = 'You will donate this amount every month, ';
    else
      this.selectedFrequncyNote =
        'You will donate this amount every annually, ';

  }

  roundNumberHandler(amount: number) {
    return Math.round(amount * 100) / 100;
  }
}
