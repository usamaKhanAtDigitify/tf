import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFqaComponent } from './contact-fqa.component';

describe('ContactFqaComponent', () => {
  let component: ContactFqaComponent;
  let fixture: ComponentFixture<ContactFqaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFqaComponent]
    });
    fixture = TestBed.createComponent(ContactFqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
