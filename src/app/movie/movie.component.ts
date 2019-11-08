import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { Movie, Emmission } from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  trailers = false;
  trailerBtnText = 'Pokaż zwiastun';

  constructor(private db: DbService) { }

  ngOnInit() {
    this.movie = this.db.singleMovie;
  }

  showTrailers() {
    this.trailers = !this.trailers;

    if (this.trailers) {
      this.trailerBtnText = 'Ukryj zwiastun';
    } else {
      this.trailerBtnText = 'Pokaż zwiastun';
    }
  }
}
