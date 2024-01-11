import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationStepperFormComponent } from './donation-stepper-form.component';
import { SuccessDonationComponent } from './success-donation/success-donation.component';
import { FailureDonationComponent } from './failure-donation/failure-donation.component';

const routes: Routes = [
   {
    path: '',
    component: DonationStepperFormComponent
   },
  {
    path:'success-donation',
    component:SuccessDonationComponent
   },
    {
      path:'failure-donation',
      component:FailureDonationComponent
    },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationRoutingModule {}
