import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./client-list/client-list.module').then(m => m.ClientListModule),
  },
  {
    path: ':id',
    loadChildren: () => import('./client-detail/client-detail.module').then(m => m.ClientDetailModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
