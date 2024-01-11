import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliBanatStoryComponent } from './ali-banat-story.component';

describe('AliBanatStoryComponent', () => {
  let component: AliBanatStoryComponent;
  let fixture: ComponentFixture<AliBanatStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AliBanatStoryComponent]
    });
    fixture = TestBed.createComponent(AliBanatStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
