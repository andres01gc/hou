import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcExamenPeriodontalComponent } from './hc-examen-periodontal.component';

describe('HcExamenPeriodontalComponent', () => {
  let component: HcExamenPeriodontalComponent;
  let fixture: ComponentFixture<HcExamenPeriodontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcExamenPeriodontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcExamenPeriodontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
