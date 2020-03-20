import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredFilmsComponent } from './filtered-films.component';

describe('FilteredFilmsComponent', () => {
  let component: FilteredFilmsComponent;
  let fixture: ComponentFixture<FilteredFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
