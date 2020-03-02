import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerPlayerComponent } from './trailer-player.component';

describe('TrailerPlayerComponent', () => {
  let component: TrailerPlayerComponent;
  let fixture: ComponentFixture<TrailerPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
