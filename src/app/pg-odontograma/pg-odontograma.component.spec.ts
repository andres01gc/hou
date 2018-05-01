import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOdontogramaComponent } from './pg-odontograma.component';

describe('PgOdontogramaComponent', () => {
  let component: PgOdontogramaComponent;
  let fixture: ComponentFixture<PgOdontogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgOdontogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOdontogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
