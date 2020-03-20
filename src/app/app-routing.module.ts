import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/cinema-home/cinema-home.module').then(m => m.CinemaHomeModule)
  },
  {
    path: 'panel',
    loadChildren: () =>
      import('src/app/admin/admin.module').then(m => m.AdminModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
  }
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
