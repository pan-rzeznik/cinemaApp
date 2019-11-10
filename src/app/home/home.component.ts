import { Movie } from './../movie.model';
import { DbService } from './../db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  movieList: Movie[];

  constructor(private db: DbService) {
    this.db.getAllMovies().subscribe((res: Movie[]) => {
       this.movieList = res;
    });
   }

}
