import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcDiagnosticoComponent } from './hc-diagnostico.component';

describe('HcDiagnosticoComponent', () => {
  let component: HcDiagnosticoComponent;
  let fixture: ComponentFixture<HcDiagnosticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcDiagnosticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
