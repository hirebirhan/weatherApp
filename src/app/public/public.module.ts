import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { PublicComponent } from './public/public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Eroor404Component } from '../components/eroor404/eroor404.component';

const routes: Routes = [
  {path:'', redirectTo:"public/home", pathMatch:'full'},
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'home/:id', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: '**', component: Eroor404Component },

    ]
  },
]


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    PublicComponent
  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
  ]
})
export class PublicModule { }
