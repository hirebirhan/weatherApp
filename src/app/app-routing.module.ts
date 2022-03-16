import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eroor404Component } from './components/eroor404/eroor404.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(module => module.PublicModule)},
  { path: 'public', loadChildren: () => import('./public/public.module').then(module => module.PublicModule)},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)},
  { path: '**', component: Eroor404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
