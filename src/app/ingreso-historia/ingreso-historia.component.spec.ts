import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoHistoriaComponent } from './ingreso-historia.component';

describe('IngresoHistoriaComponent', () => {
  let component: IngresoHistoriaComponent;
  let fixture: ComponentFixture<IngresoHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
