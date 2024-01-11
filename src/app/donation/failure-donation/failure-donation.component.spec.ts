import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureDonationComponent } from './failure-donation.component';

describe('FailureDonationComponent', () => {
  let component: FailureDonationComponent;
  let fixture: ComponentFixture<FailureDonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailureDonationComponent]
    });
    fixture = TestBed.createComponent(FailureDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
