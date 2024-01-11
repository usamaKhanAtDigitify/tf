import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEventsNearYouComponent } from './other-events-near-you.component';

describe('OtherEventsNearYouComponent', () => {
  let component: OtherEventsNearYouComponent;
  let fixture: ComponentFixture<OtherEventsNearYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherEventsNearYouComponent]
    });
    fixture = TestBed.createComponent(OtherEventsNearYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
