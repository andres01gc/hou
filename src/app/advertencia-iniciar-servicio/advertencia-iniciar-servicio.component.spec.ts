import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciaIniciarServicioComponent } from './advertencia-iniciar-servicio.component';

describe('AdvertenciaIniciarServicioComponent', () => {
  let component: AdvertenciaIniciarServicioComponent;
  let fixture: ComponentFixture<AdvertenciaIniciarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertenciaIniciarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenciaIniciarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
