import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleBannerComponent } from './simple-banner.component';



@NgModule({
  declarations: [
    SimpleBannerComponent
  ],
  exports: [
    SimpleBannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SimpleBannerModule { }
