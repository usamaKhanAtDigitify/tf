import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramStoryComponent } from './instagram-story.component';

describe('InstagramStoryComponent', () => {
  let component: InstagramStoryComponent;
  let fixture: ComponentFixture<InstagramStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramStoryComponent]
    });
    fixture = TestBed.createComponent(InstagramStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
