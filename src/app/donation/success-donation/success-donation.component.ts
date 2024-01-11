import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastService } from 'src/app/core/service/toast.service';
import { HomePageService } from 'src/app/core/service/home-page.service';

@Component({
  selector: 'app-success-donation',
  templateUrl: './success-donation.component.html',
  styleUrls: ['./success-donation.component.scss'],
})
export class SuccessDonationComponent implements OnInit {
  isChecked: boolean = false;
  showError: boolean = false;
  email:any;

  constructor(private homeSvc: HomePageService, private toastSvc:ToastService, private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
  }

  submitPreerences() {
   // localStorage.removeItem('selectedProducts')
    if (!this.isChecked) {
      this.showError = true;
    } else {
      this.showError = false;
     this.homeSvc.signupSubscriber({data: {email:this.email}}).subscribe((resp:any) => {
      if(resp) {
        this.toastSvc.showSuccess('Preferences Saved Successfuly!');
        this.router.navigate(['/']);
      }
      else {
        this.router.navigate(['/']);
      }
     },(error) => {
         this.router.navigate(['/']);
     }) 
    }
  }
}
