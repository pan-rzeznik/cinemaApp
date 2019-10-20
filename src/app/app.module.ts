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
    ScreeningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
