import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-vision-statement',
  templateUrl: './vision-statement.component.html',
  styleUrls: ['./vision-statement.component.scss']
})
export class VisionStatementComponent implements OnInit{

 @Input() visionStatementObj:any

 ngOnInit(): void {}

}
