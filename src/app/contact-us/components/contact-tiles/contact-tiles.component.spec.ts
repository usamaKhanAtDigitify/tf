import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTilesComponent } from './contact-tiles.component';

describe('ContactTilesComponent', () => {
  let component: ContactTilesComponent;
  let fixture: ComponentFixture<ContactTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactTilesComponent]
    });
    fixture = TestBed.createComponent(ContactTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
