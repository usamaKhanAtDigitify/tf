import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleIconUiComponent } from './circle-icon-ui.component';



@NgModule({
  declarations: [
    CircleIconUiComponent
  ],
  exports: [
    CircleIconUiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CircleIconUiModule { }
