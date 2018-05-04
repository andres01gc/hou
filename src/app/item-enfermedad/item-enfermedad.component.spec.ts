import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEnfermedadComponent } from './item-enfermedad.component';

describe('ItemEnfermedadComponent', () => {
  let component: ItemEnfermedadComponent;
  let fixture: ComponentFixture<ItemEnfermedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemEnfermedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
