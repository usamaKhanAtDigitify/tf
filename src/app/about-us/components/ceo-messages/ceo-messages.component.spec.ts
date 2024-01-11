import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeoMessagesComponent } from './ceo-messages.component';

describe('CeoMessagesComponent', () => {
  let component: CeoMessagesComponent;
  let fixture: ComponentFixture<CeoMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeoMessagesComponent]
    });
    fixture = TestBed.createComponent(CeoMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
