import { SafePipe } from './safe.pipe';
import { DbService } from './db.service';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularResizedEventModule } from 'angular-resize-event';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NigthModeService } from './nigth-mode.service';
import { AuthorComponent } from './author/author.component';
import { NightModeComponent } from './night-mode/night-mode.component';
import { MovieComponent } from './movie/movie.component';
import { ScreeningsComponent } from './screenings/screenings.component';
import { TrailerPlayerComponent } from './trailer-player/trailer-player.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AuthorComponent,
    NightModeComponent,
    MovieComponent,
    ScreeningsComponent,
    TrailerPlayerComponent,
    SafePipe,
    FilmCardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AngularResizedEventModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    AuthorComponent,
    NightModeComponent,
    CommonModule,
    MaterialModule,
    AngularResizedEventModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MovieComponent,
    ScreeningsComponent,
    TrailerPlayerComponent,
    SafePipe,
    FilmCardComponent,
    RatingComponent
  ],
  providers: [NigthModeService, DbService]
})
export class SharedModule { }
