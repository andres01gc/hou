import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcAntecedentesComponent } from './hc-antecedentes.component';

describe('HcAntecedentesComponent', () => {
  let component: HcAntecedentesComponent;
  let fixture: ComponentFixture<HcAntecedentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcAntecedentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
