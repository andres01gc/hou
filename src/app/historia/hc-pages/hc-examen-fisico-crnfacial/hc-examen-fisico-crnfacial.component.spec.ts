import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcExamenFisicoCrnfacialComponent } from './hc-examen-fisico-crnfacial.component';

describe('HcExamenFisicoCrnfacialComponent', () => {
  let component: HcExamenFisicoCrnfacialComponent;
  let fixture: ComponentFixture<HcExamenFisicoCrnfacialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcExamenFisicoCrnfacialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcExamenFisicoCrnfacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
