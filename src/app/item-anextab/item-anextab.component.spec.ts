import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnextabComponent } from './item-anextab.component';

describe('ItemAnextabComponent', () => {
  let component: ItemAnextabComponent;
  let fixture: ComponentFixture<ItemAnextabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAnextabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAnextabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
