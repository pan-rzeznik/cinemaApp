import { FilteredFilmsComponent } from './filtered-films/filtered-films.component';
import { MovieResolverService } from './movie-resolver.service';
import { NewFilmComponent } from './new-film/new-film.component';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie/:filmId',
    component: MovieComponent,
    resolve: {
      movie: MovieResolverService
    }
  },
  {
    path: 'repertuar',
    component: RepertoireComponent
  },
  {
    path: 'cennik',
    component: PriceListComponent
  },
  {
    path: 'wspolpraca',
    component: CooperationComponent
  },
  {
    path: 'wyszukiwarka/:date',
    component: FilteredFilmsComponent
  },
  {
    path: 'xxcv',
    component: NewFilmComponent
  },
  {
    path: '**',
    redirectTo: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
