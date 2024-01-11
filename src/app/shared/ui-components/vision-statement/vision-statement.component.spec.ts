import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionStatementComponent } from './vision-statement.component';

describe('VisionStatementComponent', () => {
  let component: VisionStatementComponent;
  let fixture: ComponentFixture<VisionStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionStatementComponent]
    });
    fixture = TestBed.createComponent(VisionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
