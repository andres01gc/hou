import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopcardComponent } from './popcard.component';

describe('PopcardComponent', () => {
  let component: PopcardComponent;
  let fixture: ComponentFixture<PopcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
