import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcExamenEstomatologicoComponent } from './hc-examen-estomatologico.component';

describe('HcExamenEstomatologicoComponent', () => {
  let component: HcExamenEstomatologicoComponent;
  let fixture: ComponentFixture<HcExamenEstomatologicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcExamenEstomatologicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcExamenEstomatologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
