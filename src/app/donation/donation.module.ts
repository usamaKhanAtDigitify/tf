import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationComponent } from './donation/donation.component';
import { DonationRoutingModule } from './donation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationStepperFormComponent } from './donation-stepper-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { FailureDonationComponent } from './failure-donation/failure-donation.component';



@NgModule({
  declarations: [
    DonationComponent,
    DonationStepperFormComponent,
    PaymentFormComponent,
    SuccessDonationComponent,
    FailureDonationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DonationRoutingModule
  ]
})
export class DonationModule { }
