import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBannerComponent } from './simple-banner.component';

describe('SimpleBannerComponent', () => {
  let component: SimpleBannerComponent;
  let fixture: ComponentFixture<SimpleBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleBannerComponent]
    });
    fixture = TestBed.createComponent(SimpleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
