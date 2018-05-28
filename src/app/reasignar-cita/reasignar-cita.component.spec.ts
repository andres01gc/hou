import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasignarCitaComponent } from './reasignar-cita.component';

describe('ReasignarCitaComponent', () => {
  let component: ReasignarCitaComponent;
  let fixture: ComponentFixture<ReasignarCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasignarCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasignarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
