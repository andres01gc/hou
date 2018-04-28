import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcExamenFisicoComponent } from './hc-examen-fisico.component';

describe('HcExamenFisicoComponent', () => {
  let component: HcExamenFisicoComponent;
  let fixture: ComponentFixture<HcExamenFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcExamenFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcExamenFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
