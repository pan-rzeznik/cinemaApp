import { DbService } from './../db.service';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  movieList: Movie[];
  innerWidth: number;
  maxMovieCount = 4;

  @Input() moviesLimiting = true;
  constructor(private db: DbService) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
  this.innerWidth = window.innerWidth;
  if (this.moviesLimiting && this.innerWidth > 1300) {
      this.maxMovieCount = 3;
    } else {
      this.maxMovieCount = 4;
    }
  }
  ngOnInit(): void {
    this.moviesLimiting ? this.onResize() : this.setLimitLessMovies();
    this.db.getUpcommingMovies().subscribe( (res: Movie[]) => this.movieList = res);
  }

  setLimitLessMovies() {
    this.maxMovieCount = 99;
  }
}
