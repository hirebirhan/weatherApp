import { LocasionComponent } from './locasion.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UsersComponent } from '../admin/users/users.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    path: "", component:LocasionComponent
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
    LocasionComponent,
    LocationsComponent
  ],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LocationModule { }
