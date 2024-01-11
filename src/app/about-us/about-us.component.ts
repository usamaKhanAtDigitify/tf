import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../core/service/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  visionStatementObj:any = {};
  timelineStoryObj:any = {};
  ourCommitmentObj:any = {};
  otherWaysHelpObj:any = {};
  ceoMessageObj:any = {};
  bannerObject: any = {};
  setsUstObj:any = {};

  constructor(private  aboutUsSvc:AboutUsService){}

  ngOnInit(): void {
   this.aboutUsSvc.getAboutUsPageData().subscribe((resp:any) => {
    if(!resp || !resp.data.attributes) {
      //  error toaster here
      return;
    }
    const attributes = resp.data.attributes;
    this.bannerObject.page = 'aboutpage'; resp.data.title  
    this.bannerObject.data = ['https://www.youtube.com/watch?v=C88Y5gRTQvc']; 
    this.visionStatementObj = attributes.top;
    this.ceoMessageObj = attributes.ceo;
    this.timelineStoryObj = attributes.journey;
    this.setsUstObj =  attributes.setApart;
    this.ourCommitmentObj = attributes.commitment;
    this.otherWaysHelpObj = attributes.help;
    console.log(resp.data.attributes,'resp.data.attributes')
    
   },(error) => {}
   )
  }
}
