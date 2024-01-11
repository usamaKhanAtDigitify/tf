import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EventsListComponent
  ],
  exports:[
    EventsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EventsListModule { }
