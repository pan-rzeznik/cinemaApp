import { EditableMovieListComponent } from './editable-movie-list/editable-movie-list.component';
import { LoginComponent } from './login/login.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AdminPanelComponent } from './admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: '',
      component: AdminPanelComponent,
      children: [
        {
          path: '',
          component: DashboardComponent
        },
        {
          path: 'nowy-film',
          component: NewMovieComponent
        },
        {
          path: 'edytuj-film',
          component: EditableMovieListComponent
        },
        {
          path: 'usuń-film',
          component: NewMovieComponent
        },
        {
          path: 'ustawienia',
          component: NewMovieComponent
        },
        {
          path: 'logowanie',
          component: LoginComponent
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {

  }

