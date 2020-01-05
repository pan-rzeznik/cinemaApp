import { firebaseConfig } from './../environments/firestore-config';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { HomeComponent } from './home/home.component';
import { DbService } from './db.service';
import { NightModeComponent } from './night-mode/night-mode.component';
import { MovieComponent } from './movie/movie.component';
import { ScreeningsComponent } from './screenings/screenings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { SearchFilmComponent } from './search-film/search-film.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { NewFilmComponent } from './new-film/new-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrailerPlayerComponent } from './trailer-player/trailer-player.component';
import { SafePipe } from './safe.pipe';
import { RatingComponent } from './rating/rating.component';
import { FilteredFilmsComponent } from './filtered-films/filtered-films.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorComponent } from './author/author.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilmCardComponent,
    RepertoireComponent,
    PriceListComponent,
    CooperationComponent,
    HomeComponent,
    NightModeComponent,
    MovieComponent,
    ScreeningsComponent,
    SearchFilmComponent,
    UpcomingMoviesComponent,
    NewFilmComponent,
    TrailerPlayerComponent,
    SafePipe,
    RatingComponent,
    FilteredFilmsComponent,
    CurrentMoviesComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    AngularResizedEventModule,
    FontAwesomeModule,
  ],
  providers: [DbService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(library: FaIconLibrary) {
  //   library.addIcons(
  //     faSave,
  //   );
  // }
 }
