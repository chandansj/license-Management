import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseDecodeComponent } from './license-decode.component';

describe('LicenseDecodeComponent', () => {
  let component: LicenseDecodeComponent;
  let fixture: ComponentFixture<LicenseDecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseDecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
