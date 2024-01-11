import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  bannerObject: any = {};

  constructor(){}

  ngOnInit(): void {
    this.bannerObject.page = 'faqspage';    
    this.bannerObject.title = 'FAQs';    
    this.bannerObject.url = 'assets/images/faqs-banner.png';    
  }

}
