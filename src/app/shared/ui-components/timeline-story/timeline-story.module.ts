import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineStoryComponent } from './timeline-story.component';



@NgModule({
  declarations: [
    TimelineStoryComponent
  ],
  exports:[
    TimelineStoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimelineStoryModule { }
