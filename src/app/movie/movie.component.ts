
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [Location]
})
export class MovieComponent implements OnInit {
  movie;
  trailers = false;
  trailerBtnText = 'Pokaż zwiastun';

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.data.subscribe( res => {
      this.movie = res.movie;
    });
  }
  goBack(): void {
    this.location.back();
  }

  showTrailers(): void {
    this.trailers = !this.trailers;

    if (this.trailers) {
      this.trailerBtnText = 'Ukryj zwiastun';
    } else {
      this.trailerBtnText = 'Pokaż zwiastun';
    }
  }
}
