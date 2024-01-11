import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestACallBackComponent } from './request-a-call-back.component';

describe('RequestACallBackComponent', () => {
  let component: RequestACallBackComponent;
  let fixture: ComponentFixture<RequestACallBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestACallBackComponent]
    });
    fixture = TestBed.createComponent(RequestACallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
