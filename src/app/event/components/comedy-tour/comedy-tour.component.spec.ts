import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyTourComponent } from './comedy-tour.component';

describe('ComedyTourComponent', () => {
  let component: ComedyTourComponent;
  let fixture: ComponentFixture<ComedyTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedyTourComponent]
    });
    fixture = TestBed.createComponent(ComedyTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
