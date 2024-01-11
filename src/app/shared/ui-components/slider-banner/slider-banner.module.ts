import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderBannerComponent } from './slider-banner.component';



@NgModule({
  declarations: [
    SliderBannerComponent
  ],
  exports: [
    SliderBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SliderBannerModule { }
