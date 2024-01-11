import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventService } from '../../event.service';
import { TopHeaderService } from 'src/app/core/service/top-header.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss']
})
export class BookingSummaryComponent implements OnInit, OnChanges {


  @Input() bookTicketObj: any = {};
  selectedSubEventId: string = '';
  selectedEventId: string = '';
  total: number = 0;
  eventsList: any[] = [];
  selectedSubEventData: any = {};
  selectedPaymenttype: string = 'stripe';

  constructor(private eventService: EventService, private topHeaderService: TopHeaderService, private router :Router, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.eventsList = this.eventService.getEventList().filter(value => value?.attributes?.event?.data?.id === Number(this.bookTicketObj.eventId));
    this.selectedSubEventData = this.eventService.getEventList().find(value => value?.id === Number(this.bookTicketObj.subEventId));
    this.bookTicketObj.category = this.selectedSubEventData?.attributes?.country?.data?.attributes?.title + ' ' + this.selectedSubEventData?.attributes?.event?.data?.attributes?.name
  }

  bookTicketHandler() {
    const tickets: any[] = [];
    this.bookTicketObj.tickets?.forEach((element: any, index: number) => {
      if(element.count !== 0){
        const ticketsObj: any = {};
        ticketsObj.quantity = element.count;
        ticketsObj.ticketId = element.id;
        tickets.push(ticketsObj);
      }
    });
    // this.total = this.subTotal;
    return tickets;
  }

  onSelectPaymentMethod(paymenttype: any) {
   // this.selectedPaymenttype = paymenttype;
    this.bookTicketObj.paymentProcessor = paymenttype;
    //this.selectedPaymenttype == 'paybarcard' || 'apple' ? 'stripe' : this.selectedPaymenttype;
    this.paymentServiceHandler(this.bookTicketObj);
  }

  paymentServiceHandler(payload: any) {
    this.getCurrencyHandler();
   const payloadReq = this.paymentPayloadHandler(payload);
   this.toastService.loaderObject$.next(true);
   this.toastService.gotoTop();
    this.eventService.getEventTicketsPayment(payloadReq).subscribe((resp: any) => {
      window.location.href = resp.data.url;
    });
  }

  paymentPayloadHandler(payload: any){
    const payloadReq =     { 
      email: 'string',
      currency:'string',
      paymentProcessor: 'string',
      name:'string',
      phone:'string',
      eventId:'',
      subEventId:'',
      date:'',
      tickets:[ {
          ticketId: '',
          quantity:''
      },{
          ticketId: '',
          quantity:''
      }
    ] };
    payloadReq.email = payload.email;
    payloadReq.currency = payload.currency;
    payloadReq.paymentProcessor = payload.paymentProcessor;
    payloadReq.name = payload.name;
    payloadReq.phone = payload.phone;
    payloadReq.eventId = payload.eventId;
    payloadReq.subEventId = payload.subEventId;
    payloadReq.date = payload.dates;
    payloadReq.tickets =  this.bookTicketHandler();
    return payloadReq;
  }

  getCurrencyHandler() {
    this.topHeaderService.getCurrencyData().subscribe((value: any) => {
     this.bookTicketObj.currency = value?.attributes?.name
    });
  }
}
