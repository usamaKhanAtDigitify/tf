import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWaysHelpComponent } from './other-ways-help.component';

describe('OtherWaysHelpComponent', () => {
  let component: OtherWaysHelpComponent;
  let fixture: ComponentFixture<OtherWaysHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherWaysHelpComponent]
    });
    fixture = TestBed.createComponent(OtherWaysHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
