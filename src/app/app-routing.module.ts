import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './core/enums/layout-enum';
import { PakistanComponent } from './pakistan/pakistan.component';
import { UnitedKingdomComponent } from './united-kingdom/united-kingdom.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'pakistan',
    component: PakistanComponent,
    data: { layout: Layouts.Main },

  },
  {
    path: 'unitedkingdom',
    component: UnitedKingdomComponent,
    data: { layout: Layouts.Main },

  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
      data: { layout: Layouts.centredContent },
  },
  {
    path: 'donation',
    loadChildren: () =>
      import('./donation/donation.module').then((m) => m.DonationModule),
      data: { layout: Layouts.Main },
  },
  {
    path: 'ali-banat',
    loadChildren: () =>
      import('./ali-banat-story/ali-banat-story.module').then((m) => m.AliBanatStoryModule),
      data: { layout: Layouts.centredContent },
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventModule),
      data: { layout: Layouts.centredContent },
  },
  {
    path: 'contact',
    loadChildren: () =>
    import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
    data: { layout: Layouts.centredContent },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
      data: { layout: Layouts.centredContent },
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('./faqs/faqs.module').then((m) => m.FaqsModule),
      data: { layout: Layouts.centredContent },
  },
   // Wildcard route
   { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
