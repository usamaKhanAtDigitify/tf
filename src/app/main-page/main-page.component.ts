import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HomePageService } from '../core/service/home-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  bannerObject: any = {page:'mainpage'};
  productList: any = [];

  constructor(private homeSvc: HomePageService) {}
  ngOnInit(): void {
    this.homeSvc.getbannerList().subscribe((resp: any) => {
      let bannersArray: any[] = resp.data[0].attributes.banners.data;
      // bannersArray.map(banner => {
      //   if(banner.attributes.media.data.attributes.mime.includes('video/mp4'))
      //       banner.attributes.media.data.attributes.url = banner.attributes.media.data.attributes.url;
      //     banner.attributes.media.data.attributes.url = 'https://strapi.dev.matwp.org' + banner.attributes.media.data.attributes.url;
      // })
       this.bannerObject.data = bannersArray;
      
    });
    this.homeSvc.getproductList().subscribe((resp: any) => {
      if(resp.data) {
        this.productList = resp.data;
      }

    });
  }

}
