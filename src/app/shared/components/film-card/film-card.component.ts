import { Movie } from '../../../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() movie: Movie;
  descriptionLength: number;

  ngOnInit(): void {
    this.setDescriptionLength();
  }

  private setDescriptionLength() {
    if (this.movie.title.length > 20 ) {
      this.descriptionLength = 170;
    } else {
      this.descriptionLength = 200;
    }
  }
}
 