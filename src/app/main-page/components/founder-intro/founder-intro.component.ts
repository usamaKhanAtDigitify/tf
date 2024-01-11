import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-founder-intro',
  templateUrl: './founder-intro.component.html',
  styleUrls: ['./founder-intro.component.scss']
})
export class FounderIntroComponent implements OnInit {

  isFounderDetailExpand = true;

  constructor(){}

  ngOnInit(): void {
    if (window.innerWidth <= 576) {
      this.isFounderDetailExpand = false;
    }
  }

  showIntoDetail() {
    this.isFounderDetailExpand = !this.isFounderDetailExpand;
  }
}
