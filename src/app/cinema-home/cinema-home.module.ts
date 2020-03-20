import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { HomeComponent } from './home/home.component';
import { SearchFilmComponent } from './search-film/search-film.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { FilteredFilmsComponent } from './filtered-films/filtered-films.component';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { CinemaHomeComponent } from './cinema-home.component';
import { SharedModule } from '../shared/shared.module';
import { CinemaRoutingModule } from './cinema-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    RepertoireComponent,
    PriceListComponent,
    CooperationComponent,
    HomeComponent,
    SearchFilmComponent,
    UpcomingMoviesComponent,
    FilteredFilmsComponent,
    CurrentMoviesComponent,
    CinemaHomeComponent
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    SharedModule
  ]
})
export class CinemaHomeModule { }
