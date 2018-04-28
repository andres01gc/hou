import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcConsentimientoComponent } from './hc-consentimiento.component';

describe('HcConsentimientoComponent', () => {
  let component: HcConsentimientoComponent;
  let fixture: ComponentFixture<HcConsentimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcConsentimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcConsentimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
