import { AdminRoutingModule } from './admin.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFilmComponent } from './new-film/new-film.component';
import { AdminPanelComponent } from './admin-panel.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardItemMenuComponent } from './card-item-menu/card-item-menu.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';


@NgModule({
  declarations: [NewFilmComponent, AdminPanelComponent, LoginComponent, DashboardComponent, CardItemMenuComponent, MoviePreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
