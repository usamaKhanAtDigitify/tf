import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-quick-donation',
  templateUrl: './quick-donation.component.html',
  styleUrls: ['./quick-donation.component.scss']
})
export class QuickDonationComponent implements OnInit {

  @Input() showDarkBlueSection: boolean = false;

  @ViewChild('quickDonationSection') quickDonationSection:
  | ElementRef
  | undefined;
  @ViewChild('quickDonationMobileSection') quickDonationMobileSection:
  | ElementRef
  | undefined;
  @ViewChild('donationSectionOnMobile') donationSectionOnMobile:
  | ElementRef
  | undefined;

  selectedAmount = '25';
  quickDonationSectionHeight: any;
  quickDonationSectionOffsetTop: any;
  isQuickDonationFixed: boolean = false;
  donationPeriod: string = 'monthly';
  
  constructor(){}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 880) {
      this.quickDonationSectionHeight =
        this.donationSectionOnMobile?.nativeElement.offsetHeight;
      this.quickDonationSectionOffsetTop =
        this.donationSectionOnMobile?.nativeElement.offsetTop;
    } else {
      this.quickDonationSectionHeight =
        this.quickDonationSection?.nativeElement.offsetHeight;
      this.quickDonationSectionOffsetTop =
        this.quickDonationSection?.nativeElement.offsetTop;
    }
  }

  onSelectAmount(amount: string) {
    this.selectedAmount = amount;
  }

  onSelectDonationPeriod(period: string) {
    this.donationPeriod = period;
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (
      Math.round(window.scrollY) >
      this.quickDonationSectionHeight + this.quickDonationSectionOffsetTop
    ) {
      this.isQuickDonationFixed = true;
    }

    if (
      Math.round(window.scrollY) <
      this.quickDonationSectionHeight + this.quickDonationSectionOffsetTop
    ) {
      this.isQuickDonationFixed = false;
    }
  }
}
