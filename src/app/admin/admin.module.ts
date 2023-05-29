import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesain } from '../material/material.module';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'',
    redirectTo:'/admin/dashboard',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AdminComponent,DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesain
  ]
})
export class AdminModule { }
