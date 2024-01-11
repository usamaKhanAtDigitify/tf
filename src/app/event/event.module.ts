import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { BreadcrumbModule } from '../shared/ui-components/breadcrumb/breadcrumb.module';
import { OtherWaysHelpModule } from '../shared/ui-components/other-ways-help/other-ways-help.module';
import { QuickDonationModule } from '../shared/ui-components/quick-donation/quick-donation.module';
import { VideoModule } from '../shared/ui-components/video/video.module';
import { SignupNewsLetterModule } from '../shared/ui-components/signup-newsletter/signup-newsletter.module';
import { EventRoutingModule } from './event-routing.module';
import { EventsListModule } from '../shared/ui-components/events-list/events-list.module';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { SliderBannerModule } from '../shared/ui-components/slider-banner/slider-banner.module';
import { SimpleBannerModule } from '../shared/ui-components/simple-banner/simple-banner.module';
import { ComedyTourComponent } from './components/comedy-tour/comedy-tour.component';
import { EventTicketDetailComponent } from './components/event-ticket-detail/event-ticket-detail.component';
import { BookingSummaryComponent } from './components/booking-summary/booking-summary.component';
import { BookingDetailComponent } from './components/booking-detail/booking-detail.component';
import { ReasonSectionComponent } from './components/reason-section/reason-section.component';
import { FormsModule } from '@angular/forms';
import { BookingSuccessComponent } from './components/booking-success/booking-success.component';
import { OtherEventsNearYouComponent } from './components/other-events-near-you/other-events-near-you.component';



@NgModule({
  declarations: [
    EventComponent,
    EventDetailComponent,
    ComedyTourComponent,
    EventTicketDetailComponent,
    BookingSummaryComponent,
    BookingDetailComponent,
    ReasonSectionComponent,
    BookingSuccessComponent,
    OtherEventsNearYouComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SliderBannerModule,
    SimpleBannerModule,
    QuickDonationModule,
    VideoModule,
    FormsModule,  
    OtherWaysHelpModule,
    BreadcrumbModule,
    SignupNewsLetterModule,
    EventsListModule
  ]
})
export class EventModule { }
