import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sets-us',
  templateUrl: './sets-us.component.html',
  styleUrls: ['./sets-us.component.scss']
})
export class SetsUsComponent {
 @Input() setsUstObj:any;

}
