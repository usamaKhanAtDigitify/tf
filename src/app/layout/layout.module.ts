import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CentredContentLayoutComponent } from './centred-content-layout/centred-content-layout.component';
import { FooterComponent } from '../shared/ui-components/footer/footer.component';
import { NavigationHeaderComponent } from '../shared/ui-components/navigation-header/navigation-header.component';
import { TopHeaderComponent } from '../shared/ui-components/top-header/top-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainLayoutComponent,
    CentredContentLayoutComponent,
    TopHeaderComponent,
    NavigationHeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports:[
    MainLayoutComponent,
    CentredContentLayoutComponent
  ]
})
export class LayoutModule { }
