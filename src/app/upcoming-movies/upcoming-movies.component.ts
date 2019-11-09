import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movieList: Movie[];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.movieList = this.db.movies.filter( (movie, i) => {
      return i === 2;
    });
  }
}
