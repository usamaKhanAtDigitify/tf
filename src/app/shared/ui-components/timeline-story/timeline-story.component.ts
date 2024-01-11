import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-story',
  templateUrl: './timeline-story.component.html',
  styleUrls: ['./timeline-story.component.scss']
})
export class TimelineStoryComponent {
@Input() timelineStoryObj:any;


}
