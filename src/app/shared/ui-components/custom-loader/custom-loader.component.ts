import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss']
})
export class CustomLoaderComponent implements OnInit {

  showLoader: boolean = false;

  constructor(private loaderService: ToastService){}

  ngOnInit(): void {
    this.loaderService.loaderObject$.subscribe(data => {
      this.showLoader = data;
    })
  }
}
