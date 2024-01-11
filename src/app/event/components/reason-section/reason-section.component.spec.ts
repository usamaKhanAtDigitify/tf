import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonSectionComponent } from './reason-section.component';

describe('ReasonSectionComponent', () => {
  let component: ReasonSectionComponent;
  let fixture: ComponentFixture<ReasonSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReasonSectionComponent]
    });
    fixture = TestBed.createComponent(ReasonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
