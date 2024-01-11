import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input() bankDetail: any;

  bankData: any;

  constructor(){}

  ngOnInit(): void {
    this.bankData = this.bankDetail;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bankData = this.bankDetail;
  }

}
