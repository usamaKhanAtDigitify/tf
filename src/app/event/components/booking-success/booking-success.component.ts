import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss']
})
export class BookingSuccessComponent implements OnInit {

  @Input() bookingSuccessObj: any = {};
  ngOnInit(): void {
  }

  totalSumHandler(adult: number, child: number, under6: number) {
    return Number(adult) + Number(child) + Number(under6);
  }
}
