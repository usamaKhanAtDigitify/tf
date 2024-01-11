import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from '../../event.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-event-ticket-detail',
  templateUrl: './event-ticket-detail.component.html',
  styleUrls: ['./event-ticket-detail.component.scss']
})
export class EventTicketDetailComponent implements OnInit {

  eventsList: any[] = [];
  ticketList: any[] = [];
  subTotal: number = 0;
  selectedSubEventId: string = '';
  selectedEventId: string = '';
  eventLocationList: any[] = ['Select'];
  eventDatesList: any[] = ['Select'];
  bookTicketObj: any = {};
  submitted: boolean = false;
  selectedSubEventData: any = {};
  @Output() eventTickets = new EventEmitter<{}>();

  constructor(private eventService: EventService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSubEventDataHandler();
    this.setFormDefaultValues();
    this.setTicketsHandler(this.selectedSubEventData?.attributes?.ticket);
  }

  getSubEventDataHandler() {
    // get data from route
    this.activatedroute.params.subscribe((data: any) => {
      this.selectedEventId = data.book_event_id;
      this.selectedSubEventId = data.selected_sub_event;
    });
    // get event and subevent through ID
    this.eventsList = this.eventService.getEventList().filter(value => value?.attributes?.event?.data?.id === Number(this.selectedEventId));
    this.selectedSubEventData = this.eventService.getEventList().find(value => value?.id === Number(this.selectedSubEventId));
    // get dates and locations list
    this.eventsList.forEach(value => {
      this.eventLocationList.push(value?.attributes?.address);
      this.eventDatesList.push(value?.attributes?.isSingleDate ? value?.attributes?.dateFrom : value?.attributes?.dateFrom + ' - ' + value?.attributes?.dateTo);
    });
  }

  setFormDefaultValues() {
    // set default data
    this.bookTicketObj.location = this.selectedSubEventData?.attributes?.address;
    this.bookTicketObj.dates = this.selectedSubEventData?.attributes?.isSingleDate ? this.selectedSubEventData?.attributes?.dateFrom : this.selectedSubEventData?.attributes?.dateFrom + ' - ' + this.selectedSubEventData?.attributes?.dateTo;
    this.bookTicketObj.tickets = [];
    this.bookTicketObj.subTotal = 0;
  }

  setTicketsHandler(ticketParam: any[]) {
    // create an tickets array for dynamical handle in HTML 
    let ticketObj: any = {};
    this.ticketList = [];
    ticketParam.forEach((value: any) => {
      ticketObj = value;
      ticketObj.count = 0;
      ticketObj.total = 0;
      this.ticketList.push(ticketObj)
    });

  }

  onChangeLocation(location: any) {
    // set date on loaction change
    this.selectedSubEventData = this.eventsList.find(value => value?.attributes?.address === location);
    this.bookTicketObj.dates = this.selectedSubEventData?.attributes?.isSingleDate ? this.selectedSubEventData?.attributes?.dateFrom : this.selectedSubEventData?.attributes?.dateFrom + ' - ' + this.selectedSubEventData?.attributes?.dateTo;
    this.setTicketsHandler(this.selectedSubEventData?.attributes?.ticket);
  }

  onChangeDates(dates: any) {
    // set loaction on date change
    this.bookTicketObj.date = dates;
    this.selectedSubEventData = this.eventsList.find(value => value?.attributes?.isSingleDate ? value?.attributes?.dateFrom === dates : value?.attributes?.dateFrom + ' - ' + value?.attributes?.dateTo === dates) as any;
    this.bookTicketObj.location = this.selectedSubEventData?.attributes?.address;
    this.setTicketsHandler(this.selectedSubEventData?.attributes?.ticket);
  }

  decreaseQuantityByOne(ticket: any) {
    if (ticket.count > 0) {
      ticket.count = ticket.count - 1;
      ticket.total = ticket.total - ticket.cost;
      this.bookTicketObj.subTotal = this.bookTicketObj.subTotal - ticket.cost;       
      const index = this.ticketList.findIndex(value => value.id === ticket.id);
      this.ticketList[index] = ticket;
      this.bookTicketObj.tickets = this.ticketList;  
      this.eventTickets.emit(this.bookTicketObj);
    }
  }

  increaseQuantityByOne(ticket: any) {
    if (ticket.count < ticket.available) {
      ticket.count++
      ticket.total = ticket.cost + ticket.total;
      this.bookTicketObj.subTotal = this.bookTicketObj.subTotal + ticket.cost;      
      const index = this.ticketList.findIndex(value => value.id === ticket.id);
      this.ticketList[index] = ticket;
      this.bookTicketObj.tickets = this.ticketList;
      this.eventTickets.emit(this.bookTicketObj);
    }
  }

  onChangeForm(name: string, data: any) {
    this.bookTicketObj[name] = data;  
    this.eventTickets.emit(this.bookTicketObj);
  }

  validateConfirmEmail(form: any) {
    const email = form.value.email;
    const confirmEmail = form.value.confirmEmail;
    if (email !== confirmEmail) {
      form.controls['confirmEmail'].setErrors({ incorrect: true });
    } else {
      form.controls['confirmEmail'].setErrors(null);
    }
  }
}
