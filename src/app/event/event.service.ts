import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsList: any[] = [];
  constructor(private http: HttpClient) { }

  getEventListApi(): Observable<any> {
    return this.http.get(
      'https://strapi.dev.matwp.org/api/sub-events?fields[0]=dateFrom&fields[1]=dateTo&fields[2]=timeFrom&fields[3]=timeTo&fields[4]=isSingleDate&fields[5]=address&populate[country][fields][0]=title&populate[event][fields][0]=name&populate[event][fields][1]=description&populate[event][populate][media][fields][0]=url&populate[event][populate][event_category][fields][0]=name&populate[ticket]=true' )}

  getEventCategoriesList(): Observable<any> {
    return this.http.get(
      'https://strapi.dev.matwp.org/api/event-categories'
    );
  }

  getEventTicketsPayment(payload:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        "Access-Control-Allow-Methods": "POST"
    });
    return this.http.post(
      'https://api-uk.dev.matwp.org/ticket' , payload
    );
  }

  setEventList(eventsList: any[]) {
    this.eventsList = eventsList;
  }

  getEventList(): any[] {
    return this.eventsList;
  }
}
