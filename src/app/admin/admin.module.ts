import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "users", component: UsersComponent
  }

];


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent
  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
