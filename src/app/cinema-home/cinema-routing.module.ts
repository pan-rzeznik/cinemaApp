import { CinemaHomeComponent } from './cinema-home.component';

import { FilteredFilmsComponent } from './filtered-films/filtered-films.component';
import { MovieResolverService } from './movie-resolver.service';
import { MovieComponent } from '../shared/movie/movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CinemaHomeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
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
        component: RepertoireComponent,
      },
      {
        path: 'cennik',
        component: PriceListComponent,
      },
      {
        path: 'wspolpraca',
        component: CooperationComponent,
      },
      {
        path: 'wyszukiwarka/:date',
        component: FilteredFilmsComponent
      },
      {
        path: '**',
        redirectTo: '',
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaRoutingModule { }
