import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteToUsComponent } from './write-to-us.component';

describe('WriteToUsComponent', () => {
  let component: WriteToUsComponent;
  let fixture: ComponentFixture<WriteToUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteToUsComponent]
    });
    fixture = TestBed.createComponent(WriteToUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
