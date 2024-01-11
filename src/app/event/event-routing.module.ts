import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  },
  {
    path: 'event-detail',
    component: EventDetailComponent
  },
  {
    path: 'success-booking',
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
