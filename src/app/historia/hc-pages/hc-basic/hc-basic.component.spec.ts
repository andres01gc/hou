import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcBasicComponent } from './hc-basic.component';

describe('HcBasicComponent', () => {
  let component: HcBasicComponent;
  let fixture: ComponentFixture<HcBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
