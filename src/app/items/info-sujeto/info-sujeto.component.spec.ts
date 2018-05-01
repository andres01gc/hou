import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSujetoComponent } from './info-sujeto.component';

describe('InfoSujetoComponent', () => {
  let component: InfoSujetoComponent;
  let fixture: ComponentFixture<InfoSujetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSujetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSujetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
