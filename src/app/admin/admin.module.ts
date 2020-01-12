import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFilmComponent } from './new-film/new-film.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


@NgModule({
  declarations: [NewFilmComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class AdminModule { }
