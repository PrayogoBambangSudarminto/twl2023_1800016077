import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then(module=>module.PublicModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
