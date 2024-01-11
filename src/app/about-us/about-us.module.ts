import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { BreadcrumbModule } from '../shared/ui-components/breadcrumb/breadcrumb.module';
import { CircleIconUiModule } from '../shared/ui-components/circle-icon-ui/circle-icon-ui.module';
import { GalleryModule } from '../shared/ui-components/gallery/gallery.module';
import { MainBannerModule } from '../shared/ui-components/main-banner/main-banner.module';
import { OtherWaysHelpModule } from '../shared/ui-components/other-ways-help/other-ways-help.module';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { TimelineStoryModule } from '../shared/ui-components/timeline-story/timeline-story.module';
import { VideoModule } from '../shared/ui-components/video/video.module';
import { VisionStatementModule } from '../shared/ui-components/vision-statement/vision-statement.module';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { CeoMessagesComponent } from './components/ceo-messages/ceo-messages.component';
import { SetsUsComponent } from './components/sets-us/sets-us.component';
import { OurCommitmentComponent } from './components/our-commitment/our-commitment.component';
import { SliderBannerModule } from '../shared/ui-components/slider-banner/slider-banner.module';
import { SimpleBannerModule } from '../shared/ui-components/simple-banner/simple-banner.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    CeoMessagesComponent,
    SetsUsComponent,
    OurCommitmentComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SimpleBannerModule,
    QuickDonationModule,
    VisionStatementModule,
    TimelineStoryModule,
    CircleIconUiModule,
    VideoModule,
    GalleryModule,
    OtherWaysHelpModule,
    BreadcrumbModule
  ]
})
export class AboutUsModule { }
