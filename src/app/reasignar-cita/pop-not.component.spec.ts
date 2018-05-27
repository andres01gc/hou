import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopNotComponent } from './pop-not.component';

describe('PopNotComponent', () => {
  let component: PopNotComponent;
  let fixture: ComponentFixture<PopNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopNotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
