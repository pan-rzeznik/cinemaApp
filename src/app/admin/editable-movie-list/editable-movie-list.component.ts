import { DbService } from 'src/app/shared/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-movie-list',
  templateUrl: './editable-movie-list.component.html',
  styleUrls: ['./editable-movie-list.component.scss']
})
export class EditableMovieListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'status', 'rating', 'lastPlaying', 'edit'];
  dataSource: any;

  constructor(private readonly db: DbService) { }

  ngOnInit() {
    this.db.getAllMovies().subscribe( movies => {
      this.dataSource = movies;
    })
  }

}
