import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcDescripcionRadiograficaComponent } from './hc-descripcion-radiografica.component';

describe('HcDescripcionRadiograficaComponent', () => {
  let component: HcDescripcionRadiograficaComponent;
  let fixture: ComponentFixture<HcDescripcionRadiograficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcDescripcionRadiograficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcDescripcionRadiograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
