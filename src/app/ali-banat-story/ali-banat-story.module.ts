import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliBanatStoryComponent } from './ali-banat-story.component';
import { AliBanatRoutingModule } from './ali-banat-routing.module';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { VisionStatementModule } from '../shared/ui-components/vision-statement/vision-statement.module';
import { TimelineStoryModule } from '../shared/ui-components/timeline-story/timeline-story.module';
import { CircleIconUiModule } from '../shared/ui-components/circle-icon-ui/circle-icon-ui.module';
import { VideoModule } from '../shared/ui-components/video/video.module';
import { GalleryModule } from '../shared/ui-components/gallery/gallery.module';
import { OtherWaysHelpModule } from '../shared/ui-components/other-ways-help/other-ways-help.module';
import { BreadcrumbModule } from '../shared/ui-components/breadcrumb/breadcrumb.module';
import { SimpleBannerModule } from '../shared/ui-components/simple-banner/simple-banner.module';



@NgModule({
  declarations: [
    AliBanatStoryComponent
  ],
  imports: [
    CommonModule,
    AliBanatRoutingModule,
    SimpleBannerModule,
    QuickDonationModule,
    VisionStatementModule,
    TimelineStoryModule,
    CircleIconUiModule,
    VideoModule,
    GalleryModule,
    OtherWaysHelpModule,
    BreadcrumbModule
  ],
  
})
export class AliBanatStoryModule { }
