import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStoryComponent } from './timeline-story.component';

describe('TimelineStoryComponent', () => {
  let component: TimelineStoryComponent;
  let fixture: ComponentFixture<TimelineStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineStoryComponent]
    });
    fixture = TestBed.createComponent(TimelineStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
