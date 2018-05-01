import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgServicioComponent } from './pg-servicio.component';

describe('PgServicioComponent', () => {
  let component: PgServicioComponent;
  let fixture: ComponentFixture<PgServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
