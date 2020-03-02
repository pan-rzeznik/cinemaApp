import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemMenuComponent } from './card-item-menu.component';

describe('CardItemMenuComponent', () => {
  let component: CardItemMenuComponent;
  let fixture: ComponentFixture<CardItemMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
