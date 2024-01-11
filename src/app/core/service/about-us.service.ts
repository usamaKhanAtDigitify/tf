import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private http:HttpClient) { }

getAboutUsPageData(): Observable<any> {
    return this.http.get(
      'https://strapi.dev.matwp.org/api/about-us?populate[commitment][populate][0]=item.image&populate[help][populate][0]=image1&populate[help][populate][1]=image2&populate[help][populate][2]=image3&populate[help][populate][3]=image4&populate[banner][populate][0]=media&populate[top][populate][0]=image&populate[ceo][populate][0]=image&populate[setApart]=true&populate[journey][populate][0]=image&populate[faqs]=true'
    );
  }
}
