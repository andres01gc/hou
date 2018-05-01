import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarServicioComponent } from './cancelar-servicio.component';

describe('CancelarServicioComponent', () => {
  let component: CancelarServicioComponent;
  let fixture: ComponentFixture<CancelarServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
