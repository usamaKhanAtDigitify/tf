import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-icon-ui',
  templateUrl: './circle-icon-ui.component.html',
  styleUrls: ['./circle-icon-ui.component.scss']
})
export class CircleIconUiComponent implements OnInit {

  @Input() data: any;

  constructor(){}

  ngOnInit(): void {
    
  }
}
