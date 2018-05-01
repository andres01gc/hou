import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioUserComponent } from './user-citas.component';

describe('ServicioUserComponent', () => {
  let component: ServicioUserComponent;
  let fixture: ComponentFixture<ServicioUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
