import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcDiagnosticoPorDienteComponent } from './hc-diagnostico-por-diente.component';

describe('HcDiagnosticoPorDienteComponent', () => {
  let component: HcDiagnosticoPorDienteComponent;
  let fixture: ComponentFixture<HcDiagnosticoPorDienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcDiagnosticoPorDienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcDiagnosticoPorDienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
