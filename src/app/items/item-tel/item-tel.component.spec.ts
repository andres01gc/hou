import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTelComponent } from './item-tel.component';

describe('ItemTelComponent', () => {
  let component: ItemTelComponent;
  let fixture: ComponentFixture<ItemTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
