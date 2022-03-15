import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin/AdminGuard';

const routes: Routes = [
  { path: "", component: AngularComponent},
  { path: "angular", component: AngularComponent, canActivate:[AdminGuard]},
  { path: "react",component: ReactComponent,canActivate:[AdminGuard]},  
]

@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent
  ],
  exports: [RouterModule],
  providers:[AdminGuard],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
