import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { BreadcrumbModule } from '../shared/ui-components/breadcrumb/breadcrumb.module';
import { MainBannerModule } from '../shared/ui-components/main-banner/main-banner.module';
import { ContactTilesComponent } from './components/contact-tiles/contact-tiles.component';
import { RequestACallBackComponent } from './components/request-a-call-back/request-a-call-back.component';
import { EmailUsComponent } from './components/email-us/email-us.component';
import { OtherWaysHelpModule } from '../shared/ui-components/other-ways-help/other-ways-help.module';
import { WriteToUsComponent } from './components/write-to-us/write-to-us.component';
import { ContactFqaComponent } from './components/contact-fqa/contact-fqa.component';
import { SimpleBannerModule } from '../shared/ui-components/simple-banner/simple-banner.module';



@NgModule({
  declarations: [
    ContactUsComponent,
    ContactTilesComponent,
    RequestACallBackComponent,
    EmailUsComponent,
    WriteToUsComponent,
    ContactFqaComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    QuickDonationModule,
    BreadcrumbModule,
    SimpleBannerModule,
    OtherWaysHelpModule
  ]
})
export class ContactUsModule { }
