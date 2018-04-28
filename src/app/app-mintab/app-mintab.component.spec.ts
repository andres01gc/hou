import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMintabComponent } from './app-mintab.component';

describe('AppMintabComponent', () => {
  let component: AppMintabComponent;
  let fixture: ComponentFixture<AppMintabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMintabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
