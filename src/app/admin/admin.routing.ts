import { LoginComponent } from './login/login.component';
import { NewFilmComponent } from './new-film/new-film.component';
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
          component: NewFilmComponent
        },
        {
          path: 'edytuj-film',
          component: NewFilmComponent
        },
        {
          path: 'usuń-film',
          component: NewFilmComponent
        },
        {
          path: 'ustawienia',
          component: NewFilmComponent
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

