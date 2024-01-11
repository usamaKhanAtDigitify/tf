import { Component, Input, OnInit } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

 // @Input() title: string = '';
  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';
  @Input() show: boolean = false;

  constructor(private toastService: ToastService){}

  ngOnInit(): void {
    this.toastService.toastObject$.subscribe((toastObject: any) => {
      this.message = toastObject.message;
      this.type = toastObject.type;
      this.show = toastObject.show;

      this.hideToast();
    })
  }

  hideToast(){
    setTimeout(() => {
      this.message = "";
      this.show = false;
    }, 3000);
  }

}
