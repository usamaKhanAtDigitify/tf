import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderIntroComponent } from './founder-intro.component';

describe('FounderIntroComponent', () => {
  let component: FounderIntroComponent;
  let fixture: ComponentFixture<FounderIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FounderIntroComponent]
    });
    fixture = TestBed.createComponent(FounderIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
