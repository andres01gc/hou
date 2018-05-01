import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHistoriaComponent } from './pagina-historia.component';

describe('PaginaHistoriaComponent', () => {
  let component: PaginaHistoriaComponent;
  let fixture: ComponentFixture<PaginaHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
