import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildLegacyProjectComponent } from './build-legacy-project.component';

describe('BuildLegacyProjectComponent', () => {
  let component: BuildLegacyProjectComponent;
  let fixture: ComponentFixture<BuildLegacyProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildLegacyProjectComponent]
    });
    fixture = TestBed.createComponent(BuildLegacyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
