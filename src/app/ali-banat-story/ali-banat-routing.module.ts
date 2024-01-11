import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliBanatStoryComponent } from './ali-banat-story.component';

const routes: Routes = [
  {
    path: '',
    component: AliBanatStoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AliBanatRoutingModule {}
