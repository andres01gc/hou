import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgTratamientoComponent } from './pg-tratamiento.component';

describe('PgTratamientoComponent', () => {
  let component: PgTratamientoComponent;
  let fixture: ComponentFixture<PgTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
