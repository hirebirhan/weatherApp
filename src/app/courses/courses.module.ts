import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AngularComponent},
  { path: "angular", component: AngularComponent},
  { path: "react",component: ReactComponent},  
]

@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent
  ],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
