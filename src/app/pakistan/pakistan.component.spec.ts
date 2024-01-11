import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakistanComponent } from './pakistan.component';

describe('PakistanComponent', () => {
  let component: PakistanComponent;
  let fixture: ComponentFixture<PakistanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PakistanComponent]
    });
    fixture = TestBed.createComponent(PakistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
