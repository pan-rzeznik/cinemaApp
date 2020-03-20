import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableMovieListComponent } from './editable-movie-list.component';

describe('EditableMovieListComponent', () => {
  let component: EditableMovieListComponent;
  let fixture: ComponentFixture<EditableMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
