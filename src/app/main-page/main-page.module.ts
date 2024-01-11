import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { BuildLegacyProjectComponent } from './components/build-legacy-project/build-legacy-project.component';
import { OurCommitmentComponent } from './components/our-commitment/our-commitment.component';
import { AliBanatStoryComponent } from './components/ali-banat-story/ali-banat-story.component';
import { ImpactAreasComponent } from './components/impact-areas/impact-areas.component';
import { EmergencyAppealComponent } from '../shared/ui-components/emergency-appeal/emergency-appeal.component';
import { GlobalReportComponent } from './components/global-report/global-report.component';
import { EventBannerComponent } from './components/event-banner/event-banner.component';
import { InstagramStoryComponent } from './components/instagram-story/instagram-story.component';
import { VolunteerAmbassadorFundraiseComponent } from './components/volunteer-ambassador-fundraise/volunteer-ambassador-fundraise.component';
import { SignupNewsletterComponent } from '../shared/ui-components/signup-newsletter/signup-newsletter.component';
import { EcommerceComponent } from '../shared/ui-components/ecommerce/ecommerce.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageService } from '../core/service/home-page.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FounderIntroComponent } from './components/founder-intro/founder-intro.component';
import { MainBannerModule } from '../shared/ui-components/main-banner/main-banner.module';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { SignupNewsLetterModule } from '../shared/ui-components/signup-newsletter/signup-newsletter.module';
import { SliderBannerModule } from '../shared/ui-components/slider-banner/slider-banner.module';

@NgModule({
  declarations: [
    MainPageComponent,
    BuildLegacyProjectComponent,
    OurCommitmentComponent,
    AliBanatStoryComponent,
    ImpactAreasComponent,
    EmergencyAppealComponent,
    GlobalReportComponent,
    EventBannerComponent,
    InstagramStoryComponent,
    VolunteerAmbassadorFundraiseComponent,
    EcommerceComponent,
    FounderIntroComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SliderBannerModule,
    QuickDonationModule,
    SignupNewsLetterModule
  ],
  providers: [HomePageService],
})
export class MainPageModule {}
