import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEvolucionComponent } from './card-evolucion.component';

describe('CardEvolucionComponent', () => {
  let component: CardEvolucionComponent;
  let fixture: ComponentFixture<CardEvolucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEvolucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
