import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcTratamientoComponent } from './hc-tratamiento.component';

describe('HcTratamientoComponent', () => {
  let component: HcTratamientoComponent;
  let fixture: ComponentFixture<HcTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
