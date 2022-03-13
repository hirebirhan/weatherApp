import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Eroor404Component } from './components/eroor404/eroor404.component';
import { LocasionComponent } from './locasion/locasion.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'locasion', component: LocasionComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)},
  { path: '**', component: Eroor404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
