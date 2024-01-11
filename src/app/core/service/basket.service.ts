import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TopHeaderService } from 'src/app/core/service/top-header.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private items: any[] = [];

  public itemsCart$ = new Subject<number>();
  public moveNext$ = new Subject<{}>();
  public totalAmount: any = 0;

  constructor(private http: HttpClient) {}

  getItems(): any[] {
   // let storedProducts: any = localStorage.getItem('selectedProducts');
    //if(storedProducts){
      //storedProducts = JSON.parse(storedProducts)
      //return [...storedProducts]; 
   // }
    //else
      return [...this.items];
  }

  addToBasket(item: any): void {
    this.items.push(JSON.parse(JSON.stringify(item)));
    this.itemsCart$.next(this.items.length);
  }

  increaseAmountByOne(id: number, index: number) {
    this.items[index].attributes.quantity += 1;
    this.items[index].attributes.donatedAmount += 1;
  }

  decreaseAmountByOne(id: number, index: number) {
      this.items[index].attributes.quantity -= 1;
      this.items[index].attributes.donatedAmount -= 1;
  }

  decreaseQuantityByOne(id: number, index: number, rateAmount: any) {
      this.items[index].attributes.quantity -= 1;
      this.items[index].attributes.donatedAmount -=
        this.items[index].attributes.amount * rateAmount;
  }

  increaseQuantityByOne(id: number, index: number, rateAmount: any) {
    this.items[index].attributes.quantity += 1;
    this.items[index].attributes.donatedAmount +=
      this.items[index].attributes.amount * rateAmount;
  }


  removeFromBasket(index: number): void {
    this.items.splice(index, 1);
  }

  getaddOnProduct(): Observable<any> {
    return this.http.get(
      'https://strapi.dev.matwp.org/api/products?populate[image][fields][0]=url&filters[addon][$eq]=true'
    );
  }
  stipePayment(payload:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        "Access-Control-Allow-Methods": "POST"
    });
    // 'https://nvd60sc03i.execute-api.eu-west-2.amazonaws.com/Prod/donation'
    return this.http.post(
      'https://api-uk.dev.matwp.org/donation',payload
    );
  }

  updateTotalAmount(amount: any){
    this.totalAmount = amount;
  }

  getTotalAmount(){
    // let totalAmount: any = 0;
    // this.items.forEach((product: any) => {
    //     totalAmount += product.attributes.donatedAmount;
    // });

    return this.totalAmount;
  }

  onChangeCurrency(data: any, rate: any){
    //let currencySymbol = data?.attributes?.symbol;
    let currency = data?.attributes?.name;
    //const rate = this.topHeaderService.getRateData();
    let rateAmount = rate?.attributes[currency as any]; 
    this.items.forEach((product: any) => {
      product.attributes.symbol = data.attributes.symbol;
      
      if(product.attributes.fixedPrice)
          product.attributes.donatedAmount = Number((product.attributes.donatedAmount * rateAmount).toFixed(2));
      else{
          product.attributes.donatedAmount = product.attributes.donatedAmount;
          product.attributes.amountWithSymbol = `${product.attributes.symbol}${product.attributes.donatedAmount}` 
      }
    });
  }
  
  clearBasket(): void {
    this.items = [];
  }
}
