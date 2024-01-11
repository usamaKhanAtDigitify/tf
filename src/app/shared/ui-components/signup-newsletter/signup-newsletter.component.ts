import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../../core/service/home-page.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-signup-newsletter',
  templateUrl: './signup-newsletter.component.html',
  styleUrls: ['./signup-newsletter.component.scss'],
})
export class SignupNewsletterComponent implements OnInit {
  PAT_EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$';
  newslatterForm!: FormGroup;
  submitted = false;
  isloading: Boolean = false;

  constructor(
    private homeSvc: HomePageService,
    private fb: FormBuilder,
    private toastSvc: ToastService
  ) {}

  ngOnInit(): void {
    this.newslatterForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.PAT_EMAIL)]],
      active: [false, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.newslatterForm.controls;
  }

  newslatterSubmit() {
    this.submitted = true;
    if (this.newslatterForm.invalid) {
      return;
    }
    this.isloading = true;

    this.homeSvc
      .signupSubscriber({
        data: { email: this.newslatterForm.controls['email'].value },
      })
      .subscribe(
        (resp: any) => {
          if (resp.status === 200) {
            this.isloading = false;
            this.submitted = false;
            this.toastSvc.showSuccess("Thank you for subscribing!");
            this.resetForm();
          }
        },
        (error) => {
          this.isloading = false;
          this.submitted = false;
          this.toastSvc.showError(error.error.error.message);
        }
      );
  }

  resetForm() {
    this.newslatterForm.patchValue({
      email: '',
      active: false,
    });
  }
}
