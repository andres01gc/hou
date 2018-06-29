import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBtComponent } from './item-bt.component';

describe('ItemBtComponent', () => {
  let component: ItemBtComponent;
  let fixture: ComponentFixture<ItemBtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
