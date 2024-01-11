import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNewsletterComponent } from './signup-newsletter.component';

describe('SignupNewsletterComponent', () => {
  let component: SignupNewsletterComponent;
  let fixture: ComponentFixture<SignupNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupNewsletterComponent]
    });
    fixture = TestBed.createComponent(SignupNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
