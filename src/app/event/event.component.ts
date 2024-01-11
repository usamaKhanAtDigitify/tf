import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  bannerObject: any = {};

  constructor(){}

  ngOnInit(): void {
    this.bannerObject.page = 'eventpage';    
    this.bannerObject.title = 'Our Events';    
    this.bannerObject.url = 'assets/images/event-banner-img.png';    
  }
}
