import { AdminRoutingModule } from './admin.routing';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AdminPanelComponent } from './admin-panel.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardItemMenuComponent } from './card-item-menu/card-item-menu.component';
import { MoviePreviewComponent } from './movie-preview/movie-preview.component';
import { EditableMovieListComponent } from './editable-movie-list/editable-movie-list.component';


@NgModule({
  declarations: [NewMovieComponent, AdminPanelComponent, LoginComponent, DashboardComponent, CardItemMenuComponent, MoviePreviewComponent, EditableMovieListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    AdminRoutingModule
  ],
  providers: [
    { provide: 'API_URL', useValue: 'moje api' }
  ]
})
export class AdminModule { }
