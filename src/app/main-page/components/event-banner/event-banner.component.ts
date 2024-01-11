import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-banner',
  templateUrl: './event-banner.component.html',
  styleUrls: ['./event-banner.component.scss'],
})
export class EventBannerComponent implements OnInit {
  public index = 0;
  public counter = 0;
  interval: any;
  ngOnInit() {
    this.interval = setInterval(() => {
      this.counter++;
      if (this.counter <= this.indexMax()) {
        this.index = this.counter;
      }
      if (this.counter > this.indexMax()) {
        this.index = this.counter = 0;
      }
    }, 3000);
  }

  indexMax = () => {
    return 2 - 1;
  };

  showSlidder = (index: any) => {
    this.index = this.counter = index;
    clearInterval(this.interval);
  };
}
