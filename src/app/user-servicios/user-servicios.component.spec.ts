import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiciosComponent } from './user-servicios.component';

describe('UserServiciosComponent', () => {
  let component: UserServiciosComponent;
  let fixture: ComponentFixture<UserServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
