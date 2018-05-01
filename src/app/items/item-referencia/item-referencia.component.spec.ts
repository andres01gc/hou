import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReferenciaComponent } from './item-referencia.component';

describe('ItemReferenciaComponent', () => {
  let component: ItemReferenciaComponent;
  let fixture: ComponentFixture<ItemReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
