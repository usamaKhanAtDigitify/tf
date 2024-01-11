import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationStepperFormComponent } from './donation-stepper-form.component';

describe('DonationStepperFormComponent', () => {
  let component: DonationStepperFormComponent;
  let fixture: ComponentFixture<DonationStepperFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationStepperFormComponent]
    });
    fixture = TestBed.createComponent(DonationStepperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
