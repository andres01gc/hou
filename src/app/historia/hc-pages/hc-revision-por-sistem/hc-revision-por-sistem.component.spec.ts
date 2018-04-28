import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcRevisionPorSistemComponent } from './hc-revision-por-sistem.component';

describe('HcRevisionPorSistemComponent', () => {
  let component: HcRevisionPorSistemComponent;
  let fixture: ComponentFixture<HcRevisionPorSistemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcRevisionPorSistemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcRevisionPorSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
