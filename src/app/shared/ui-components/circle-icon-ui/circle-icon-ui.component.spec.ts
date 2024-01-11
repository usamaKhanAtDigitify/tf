import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIconUiComponent } from './circle-icon-ui.component';

describe('CircleIconUiComponent', () => {
  let component: CircleIconUiComponent;
  let fixture: ComponentFixture<CircleIconUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleIconUiComponent]
    });
    fixture = TestBed.createComponent(CircleIconUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
