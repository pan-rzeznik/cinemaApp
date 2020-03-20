import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DbService } from '../../shared/db.service';
import { Router } from '@angular/router';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.scss'],
})
export class CurrentMoviesComponent implements OnInit {
  movieList: Movie[];
  maxMovieCount = 4;
  innerWidth: number;

  @Input() moviesLimiting = true;
  constructor(private db: DbService, private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
  this.innerWidth = window.innerWidth;
  if (this.moviesLimiting) {
    this.changeMovieLimit();
    return;
  }

  this.setLimitLessMovies();

}

  ngOnInit(): void {
    this.moviesLimiting ? this.onResize() : this.setLimitLessMovies();
    this.db.getCurrentMovies().subscribe((res: Movie[]) => this.movieList = res);
  }

  private setLimitLessMovies() {
    this.maxMovieCount = 99;
  }

  private changeMovieLimit(): void {
    if (this.moviesLimiting && this.innerWidth > 1300) {
      this.maxMovieCount = 3;
    } else {
      this.maxMovieCount = 4;
    }
  }
}
