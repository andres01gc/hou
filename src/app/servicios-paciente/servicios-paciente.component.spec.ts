import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosPacienteComponent } from './servicios-paciente.component';

describe('ServiciosPacienteComponent', () => {
  let component: ServiciosPacienteComponent;
  let fixture: ComponentFixture<ServiciosPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
