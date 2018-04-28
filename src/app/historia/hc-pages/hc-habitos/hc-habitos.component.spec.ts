import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcHabitosComponent } from './hc-habitos.component';

describe('HcHabitosComponent', () => {
  let component: HcHabitosComponent;
  let fixture: ComponentFixture<HcHabitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcHabitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcHabitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
