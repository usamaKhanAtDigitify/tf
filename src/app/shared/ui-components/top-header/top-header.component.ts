import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TopHeaderService } from '../../../core/service/top-header.service';
import { HomePageService } from 'src/app/core/service/home-page.service';
import { BasketService } from 'src/app/core/service/basket.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit, OnChanges {
  public selectedLanguage: string = 'en';
  public selectedCurrency: string = 'gbp';
  public currencySymbol: string = "£";


  public getScreenWidth: any;
  public getScreenHeight: any;
  @Input() islamicDate: any;
  @Input() languageList: any;
  @Input() currencyList: any;
  @Input() countryList: any;
  @Output() selectedCountry = new EventEmitter<{}>();

  imageURL = 'https://dev-matw-strapi-s3.s3.eu-west-2.amazonaws.com/united_kingdom_d183d5c553.png';

  constructor(private topHeaderService: TopHeaderService, private bascketService: BasketService) { }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.languageList.length > 0)
      this.selectedLanguage = this.languageList[0].code;
      if(!localStorage.getItem('Currency')) {
        localStorage.setItem('Currency', 'aud');
        localStorage.setItem('currency_symbol', 'A$');
      }
      
      if(this.countryList.length >  0){
      let user_country = localStorage.getItem('userOrigin');
      if(user_country){
        user_country = this.countryList.filter( (country: any) => user_country?.toLocaleLowerCase() === country.attributes.name.toLocaleLowerCase());
        this.selectCountry(user_country);
      }
    }
    this.setCurrencyHandler();
  }

  setCurrencyHandler() {
    if (this.currencyList.length > 0) {
      let findDefaultCurrency;
      if (!this.topHeaderService.currencyData) {
        findDefaultCurrency = this.currencyList?.find((value: any) => value.attributes.title === 'AUD');
      } else {
        findDefaultCurrency = this.topHeaderService.currencyData
      }
      this.selectedCurrency = `${findDefaultCurrency?.attributes.symbol} ${findDefaultCurrency?.attributes.title}`;
      this.topHeaderService.setCurrencyData(findDefaultCurrency);
      this.setCountryHandler(findDefaultCurrency?.id);
    }
  }

  setCountryHandler(currencyID: number) {
    if (this.countryList.length > 0) {
      let findDefaultCurrency = this.countryList?.find((value: any) => value.attributes.currency.data.id === currencyID);
      this.imageURL = findDefaultCurrency?.attributes?.flag?.data?.attributes?.url;
      this.topHeaderService.setCountryData(findDefaultCurrency);
    }
  }

  selectCountry(country: any) {
    this.imageURL = country.attributes.flag.data.attributes.url;
    this.selectedCurrency = `${country.attributes.currency.data.attributes.symbol} ${country.attributes.currency.data.attributes.title}`;
    this.topHeaderService.setCurrencyData(country.attributes.currency.data);
    this.bascketService.onChangeCurrency(country.attributes.currency.data, this.topHeaderService.getRateData());
    this.selectedCountry.emit((country.attributes.name).toLowerCase());
  }

  onSelectLanguage(param: string) {
    this.selectedLanguage = param;
  }

  onSelectCurrency(currency: any) {
    if(!localStorage.getItem('Currency')) {
      localStorage.setItem('Currency', currency.attributes.name);
      localStorage.setItem('currency_symbol', currency.attributes.symbol);
    }
    this.topHeaderService.setCurrencyData(currency);
    this.bascketService.onChangeCurrency(currency, this.topHeaderService.getRateData());
    this.selectedCurrency = `${currency.attributes.symbol} ${currency.attributes.title}`;
    //   this.imageURL = this.countryList?.find((value: any) => value.attributes.currency.data.id === currency.id)?.attributes?.flag?.data?.attributes?.url
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
