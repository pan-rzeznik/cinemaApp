import { AdminModule } from './admin/admin.module';
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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchFilmComponent } from './search-film/search-film.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { TrailerPlayerComponent } from './trailer-player/trailer-player.component';
import { SafePipe } from './safe.pipe';
import { RatingComponent } from './rating/rating.component';
import { FilteredFilmsComponent } from './filtered-films/filtered-films.component';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { AuthorComponent } from './author/author.component';
import { SharedModule } from './shared/shared.module';
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
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule,
    AdminModule
  ],
  providers: [DbService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
