import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { DbService } from '../db.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.scss']
})
export class RepertoireComponent implements OnInit {
  movieList: Movie[];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.movieList = this.db.movies;
  }

}
