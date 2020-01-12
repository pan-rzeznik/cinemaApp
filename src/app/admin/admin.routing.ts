import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'admin'
    },
    {
        path: 'admin',
        component: AdminPanelComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }