import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/service/localstorage.service';
import { HomePageService } from 'src/app/core/service/home-page.service';
import { TopHeaderService } from 'src/app/core/service/top-header.service';

@Component({
  selector: 'app-centred-content-layout',
  templateUrl: './centred-content-layout.component.html',
  styleUrls: ['./centred-content-layout.component.scss']
})
export class CentredContentLayoutComponent implements OnInit {

  islamicdateObj = {};
  language: any = [];
  currency: any = [];
  country: any = [];
  bankDetail: any;

  constructor(private homeSvc: HomePageService, private localStorage: LocalStorageService){
  }

  ngOnInit(): void {
    this.homeSvc.islamicHijriDate().subscribe((resp: any) => {
      this.islamicdateObj = resp.data;
    });
    this.getCurrency();
    this.getLanguage();
    this.getCountry();

    this.bankDetail = this.localStorage.getItem('bankDetail');
  }

  getCurrency() {
    this.homeSvc.getCurrency().subscribe((resp: any) => {
      this.currency = resp.data;
    });
  }

  getCountry() {
    this.homeSvc.getCountry().subscribe((resp: any) => {
      this.country = resp.data;
      
    });
  }

  getLanguage() {
    this.homeSvc.getLanguage().subscribe((resp: any) => {
      this.language = resp;
    });
  }

  
  getBankDetail(event:any){
    this.homeSvc.getBankDetail(event).subscribe(data=>{
      this.localStorage.setItem('bankDetail', data.data.attributes.bank[0]);
      this.bankDetail = data.data.attributes.bank[0];
    })
  }
}
