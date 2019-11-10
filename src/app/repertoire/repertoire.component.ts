import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { DbService } from '../db.service';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.scss']
})
export class RepertoireComponent {
  movieList: Movie[];
  constructor(private db: DbService) { }
}
