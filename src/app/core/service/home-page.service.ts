import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomePageService {
  apiUrl = 'http://localhost:1377/api';
  constructor(private http: HttpClient) {}


  getbannerList(): Observable<any> {
    return this.http.get(
      'https://strapi.dev.matwp.org/api/homes?populate[banners][populate][media]=true&populate[banners][sort][0]=order:asc&filters[regions][slug][$eq]=uk'
    );
  }
  
  signupSubscriber(payload: any): Observable<any> {
    return this.http.post(
      'https://strapi.dev.matwp.org/api/subscribers',
      payload,
      { observe: 'response' }
    );
  }
  getproductList(): Observable<any> {
    return this.http.get(
      '  https://strapi.dev.matwp.org/api/products?filters[addon][$eq]=false&populate[image][fields][0]=url&populate[categories][fields][0]=title&populate[categories][filters][type]=main&populate[countries][fields][0]=title'
    );
  }



  islamicHijriDate(): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/hijri-date');
  }
  getCurrency(): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/currencies');
  }
  getLanguage(): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/i18n/locales');
  }
  getCountry(): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/regions?populate=*');
  }

  getBankDetail(country: string): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/footer?populate[logo][fields][0]=url&populate[aboutUs]=true&populate[resources]=true&populate[legal]=true&populate[bank][filters][regions][slug][$eq]=' + country);
  }

  getCurrencyRate(): Observable<any> {
    return this.http.get('https://strapi.dev.matwp.org/api/rate');
  }
}
