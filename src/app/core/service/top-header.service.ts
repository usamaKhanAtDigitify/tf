import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TopHeaderService  {

  public currencyObj$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public countryObj$: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public currencyData = undefined;
  public rate = {}
  constructor() { }

  setCurrencyData(currency: any): void {
    // to check selected history of currency
    this.currencyData = currency;
    this.currencyObj$.next(currency);
  }

  getCurrencyData(): BehaviorSubject<any> {
    return this.currencyObj$;
  }

  setCountryData(country: any): void {
    this.countryObj$.next(country);
  }

  getCountryData(): any {
    return this.countryObj$;
  }

  setRateData(rate: any): void {
    this.rate = rate;
  }

  getRateData(): any {
    return this.rate;
  }
}
