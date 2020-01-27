import { ProfileComponent } from './features/user/profile/profile.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    // loadChildren: () => import('./features/login/login.module').then(mod => mod.LoginModule),
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(mod => mod.RegisterModule),
    // component: RegisterComponent
  },
  {
    path: 'product/product-list',
    component: ProductListComponent
  },
  {
    path: 'product/product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'home',
    // loadChildren: () => import('. /core/core.module').then(mod => mod.CoreModule),
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
