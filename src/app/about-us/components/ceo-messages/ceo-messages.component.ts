import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ceo-messages',
  templateUrl: './ceo-messages.component.html',
  styleUrls: ['./ceo-messages.component.scss']
})
export class CeoMessagesComponent {
 @Input() ceoMessageObj:any;


}
