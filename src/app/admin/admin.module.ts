import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { Eroor404Component } from '../components/eroor404/eroor404.component';
import { AdminGuard } from './Admin.guard';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherComponent } from './other/other.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UsersService } from './services/users.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {
    path: "", redirectTo: 'dashboard', pathMatch: "full"
  },
  {
    path: "", component: SidebarComponent,
    children: [
      {
        path: "dashboard", component: DashboardComponent, canActivate: [AdminGuard]
      },
      {
        path: "users", component: UsersComponent
      },
      {
        path: "parent", component: ParentComponent
      },
      {
        path: "form", component: ReactiveFormComponent
      },
      {
        path: "**", component: Eroor404Component
      }

    ]
  },


];


@NgModule({
  declarations: [
    UsersComponent,
    SidebarComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent,
    OtherComponent,
    ReactiveFormComponent
  ],
  exports: [RouterModule],
  providers: [AdminGuard, UsersService],
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
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AdminModule { }
