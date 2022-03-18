import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Eroor404Component } from '../components/eroor404/eroor404.component';
import { AdminGuard } from './Admin.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path:"", redirectTo: 'dashboard', pathMatch:"full"
  },
  {
    path: "", component: SidebarComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent, canActivate:[AdminGuard]
      },
      {
        path: "users", component: UsersComponent
      },
      {
        path: "parent", component: ParentComponent
      },
      {
        path: "**", component: Eroor404Component }
    
    ]
  },


];


@NgModule({
  declarations: [
    UsersComponent,
    SidebarComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent
  ],
  exports: [RouterModule],
  providers:[AdminGuard],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AdminModule { }
