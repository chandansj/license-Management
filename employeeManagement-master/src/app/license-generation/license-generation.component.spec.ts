import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseGenerationComponent } from './license-generation.component';

describe('LicenseGenerationComponent', () => {
  let component: LicenseGenerationComponent;
  let fixture: ComponentFixture<LicenseGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
