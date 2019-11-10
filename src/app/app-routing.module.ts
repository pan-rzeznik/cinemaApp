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
    path: 'movie',
    component: MovieComponent
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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
