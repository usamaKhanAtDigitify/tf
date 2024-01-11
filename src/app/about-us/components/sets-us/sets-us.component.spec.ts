import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsUsComponent } from './sets-us.component';

describe('SetsUsComponent', () => {
  let component: SetsUsComponent;
  let fixture: ComponentFixture<SetsUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetsUsComponent]
    });
    fixture = TestBed.createComponent(SetsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
