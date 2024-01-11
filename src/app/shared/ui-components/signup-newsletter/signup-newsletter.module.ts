import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupNewsletterComponent } from './signup-newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupNewsletterComponent
  ],
  exports:[
    SignupNewsletterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignupNewsLetterModule { }
