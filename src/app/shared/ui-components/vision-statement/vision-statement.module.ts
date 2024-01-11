import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisionStatementComponent } from './vision-statement.component';



@NgModule({
  declarations: [
    VisionStatementComponent
  ],
  exports:[
    VisionStatementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VisionStatementModule { }
