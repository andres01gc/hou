import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcPeriodontogramaComponent } from './hc-periodontograma.component';

describe('HcPeriodontogramaComponent', () => {
  let component: HcPeriodontogramaComponent;
  let fixture: ComponentFixture<HcPeriodontogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPeriodontogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcPeriodontogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
