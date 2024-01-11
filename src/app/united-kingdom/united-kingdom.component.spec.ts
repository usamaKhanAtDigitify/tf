import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedKingdomComponent } from './united-kingdom.component';

describe('UnitedKingdomComponent', () => {
  let component: UnitedKingdomComponent;
  let fixture: ComponentFixture<UnitedKingdomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitedKingdomComponent]
    });
    fixture = TestBed.createComponent(UnitedKingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
