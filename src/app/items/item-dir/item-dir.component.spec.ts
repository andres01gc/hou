import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDirComponent } from './item-dir.component';

describe('ItemDirComponent', () => {
  let component: ItemDirComponent;
  let fixture: ComponentFixture<ItemDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
