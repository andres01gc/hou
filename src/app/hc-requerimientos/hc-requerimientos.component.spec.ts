import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcRequerimientosComponent } from './hc-requerimientos.component';

describe('HcRequerimientosComponent', () => {
  let component: HcRequerimientosComponent;
  let fixture: ComponentFixture<HcRequerimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcRequerimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
