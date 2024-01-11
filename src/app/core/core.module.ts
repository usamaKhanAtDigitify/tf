import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { BasketService } from './service/basket.service';
import { HomePageService } from './service/home-page.service';
import { TopHeaderService } from './service/top-header.service';
import { LocalStorageService } from './service/localstorage.service';
import { ToastService } from './service/toast.service';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
  providers: [BasketService, HomePageService, TopHeaderService, LocalStorageService, ToastService],
})
export class CoreModule {}
