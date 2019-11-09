import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';
import { Movie} from '../movie.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [Location]
})
export class MovieComponent implements OnInit {
  movie: Movie;
  trailers = false;
  trailerBtnText = 'Pokaż zwiastun';

  constructor(private db: DbService, private location: Location) { }

  ngOnInit() {
    this.movie = this.db.singleMovie;
  }

  goBack() {
    this.location.back(); 
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
