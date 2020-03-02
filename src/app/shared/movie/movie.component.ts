
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
  showHeaderImg$: Observable<boolean>;

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.route.data.subscribe( res => this.movie = res.movie);
  }
  goBack(): void {
    this.location.back();
  }
  showTrailers(): void {
    this.trailers = !this.trailers;
    this.trailerBtnText = this.trailers ? 'Ukryj zwiastun' : 'Pokaż zwiastun';
  }
}
