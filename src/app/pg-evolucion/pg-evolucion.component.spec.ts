import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEvolucionComponent } from './pg-evolucion.component';

describe('PgEvolucionComponent', () => {
  let component: PgEvolucionComponent;
  let fixture: ComponentFixture<PgEvolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgEvolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
