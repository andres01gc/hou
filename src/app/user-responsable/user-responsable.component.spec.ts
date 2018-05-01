import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResponsableComponent } from './user-responsable.component';

describe('UserResponsableComponent', () => {
  let component: UserResponsableComponent;
  let fixture: ComponentFixture<UserResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
