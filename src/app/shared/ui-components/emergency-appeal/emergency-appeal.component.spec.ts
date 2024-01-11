import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyAppealComponent } from './emergency-appeal.component';

describe('EmergencyAppealComponent', () => {
  let component: EmergencyAppealComponent;
  let fixture: ComponentFixture<EmergencyAppealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyAppealComponent]
    });
    fixture = TestBed.createComponent(EmergencyAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
