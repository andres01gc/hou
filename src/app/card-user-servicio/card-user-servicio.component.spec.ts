import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserServicioComponent } from './card-user-servicio.component';

describe('CardUserServicioComponent', () => {
  let component: CardUserServicioComponent;
  let fixture: ComponentFixture<CardUserServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUserServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
