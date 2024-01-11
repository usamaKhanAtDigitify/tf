import { Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent implements OnInit {
  public index = 0;
  public counter = 0;
  interval: any;
  videoElementRef: any;
  mediaPlyaerBtnIcon = 'bi-play-fill';
  @Input() bannerObject: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
      
    if(this.bannerObject.page == 'mainpage'){
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
  }

  indexMax = () => {
    return this.bannerObject.data.length - 1;
  };

  nextScreen = () => {
    if (this.index < this.indexMax()) {
      this.index++;
    }
  };

  prevScreen = () => {
    if (this.index > 0) {
      this.index--;
    }
  };

  showSlidder = (index: any) => {
    this.index = this.counter = index;
    clearInterval(this.interval);
    if (this.videoElementRef) {
      this.videoElementRef.pause();
      this.mediaPlyaerBtnIcon = 'bi-play-fill';
    }
  };

  updateScreen = () => {
    // this.reset();
    // this.goTo(this.index);
    // this.setBtns();
  };

  playVideo(tagRef: any) {
    this.videoElementRef = tagRef;
    if (this.videoElementRef.paused) {
      this.videoElementRef.play();
      this.mediaPlyaerBtnIcon = 'bi-stop-fill';
      clearInterval(this.interval);
    } else {
      this.videoElementRef.pause();
      this.mediaPlyaerBtnIcon = 'bi-play-fill';
    }

    this.videoElementRef.onended = () => {
      this.mediaPlyaerBtnIcon = 'bi-play-fill';
    };
  }
}
