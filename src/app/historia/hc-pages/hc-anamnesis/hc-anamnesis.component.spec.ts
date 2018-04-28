import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcAnamnesisComponent } from './hc-anamnesis.component';

describe('HcAnamnesisComponent', () => {
  let component: HcAnamnesisComponent;
  let fixture: ComponentFixture<HcAnamnesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcAnamnesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcAnamnesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
