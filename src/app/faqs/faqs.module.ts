import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { SimpleBannerModule } from '../shared/ui-components/simple-banner/simple-banner.module';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { QuestionAnswerComponent } from './component/question-answer/question-answer.component';



@NgModule({
  declarations: [
    FaqsComponent,
    QuestionAnswerComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SimpleBannerModule,
    QuickDonationModule
  ]
})
export class FaqsModule { }
