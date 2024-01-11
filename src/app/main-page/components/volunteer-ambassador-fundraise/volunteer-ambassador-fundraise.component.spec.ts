import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAmbassadorFundraiseComponent } from './volunteer-ambassador-fundraise.component';

describe('VolunteerAmbassadorFundraiseComponent', () => {
  let component: VolunteerAmbassadorFundraiseComponent;
  let fixture: ComponentFixture<VolunteerAmbassadorFundraiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolunteerAmbassadorFundraiseComponent]
    });
    fixture = TestBed.createComponent(VolunteerAmbassadorFundraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
