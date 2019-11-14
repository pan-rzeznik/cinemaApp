import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Movie } from './../movie.model';
import { DbService } from './../db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  movieList: Movie[];

  constructor(private db: DbService, private router: Router) {}

  ngOnInit(): void {
    this.db.getAllMovies().subscribe((res: Movie[]) => this.movieList = res);
  }

}
