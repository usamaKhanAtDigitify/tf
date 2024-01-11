import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  bookTicketObj: any = {};
  selectedSubEventId: string = '';
  selectedEventId: string = '';
  bannerObject: any = {};
  bookingSuccessObj: any = {};
  formSteps = [
    {
      stepNumber: 0,
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    },
    {
      stepNumber: 1,
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    },
    {
      stepNumber: 2,
      visited: false,
      moveFormLeft: false,
      moveFormRight: false,
      checked: false,
    }
  ];
  activeStep: number = 0;

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event.routerEvent instanceof NavigationEnd) {
        // this only fires for `NavigationStart` and no other events
        if (event.routerEvent.url.includes('success-booking'))
          this.activeStep = 2;
        this.activatedroute.queryParams.subscribe((data: any) => {
          this.bookingSuccessObj = data;
        });
      }
    });
    this.bannerObject.page = 'eventdetailpage';
    this.bannerObject.title = 'Event Name';
    this.bannerObject.description = 'Help by donating to those who need it the most. Every small or big donation makes an impact.';
    this.bannerObject.url = 'assets/images/event-detail-img.png';
    this.routerParam();
  }

  routerParam() {
    this.activatedroute.params.subscribe((data: any) => {
      this.selectedEventId = data.book_event_id;
      this.selectedSubEventId = data.selected_sub_event;
    });
  }
  moveRight() {
    if (this.bookTicketObj.email && this.bookTicketObj.confirmEmail && (this.bookTicketObj.email === this.bookTicketObj.confirmEmail)) {
      if (this.activeStep < this.formSteps.length - 1) {
        this.formSteps[this.activeStep].moveFormLeft = true;
        this.formSteps[this.activeStep + 1].moveFormRight = false;
        this.activeStep += 1;
      }
    }
  }

  moveLeft() {
    if (this.activeStep > 0) {
      this.formSteps[this.activeStep - 1].moveFormLeft = false;
      this.formSteps[this.activeStep].moveFormRight = true;
      this.activeStep -= 1;
    }
  }

  eventBookTicketHandler($event: any) {
    console.log(this.bookTicketObj);

    this.bookTicketObj = $event;
    this.bookTicketObj.eventId = this.selectedEventId;
    this.bookTicketObj.subEventId = this.selectedSubEventId;
  }
}