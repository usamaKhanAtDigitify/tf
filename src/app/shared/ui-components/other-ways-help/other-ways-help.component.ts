import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-other-ways-help',
  templateUrl: './other-ways-help.component.html',
  styleUrls: ['./other-ways-help.component.scss']
})
export class OtherWaysHelpComponent implements OnInit {

  @Input() otherWaysHelpObj:any;
  @Input('page') page: any = '';

  constructor(){}

  ngOnInit(): void {}
}
