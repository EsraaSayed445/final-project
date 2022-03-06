import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './core/product-feature/home/home.component';

import { LoginComponent } from './admin/login/login.component';
import { AboutUsComponent } from './core/product-feature/about-us/about-us.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { ContactUsComponent } from './core/product-feature/contact-us/contact-us.component';


// lazy loading
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'',component:ProductListingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'contact-us',component:ContactUsComponent},
  // {path:'home',redirectTo: '',pathMatch:'full'},
  {path:'product',children:[
    {path:'listing', component:ProductListingComponent},
    {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductFormComponent},
    {path:'edit/:productId',component:ProductFormComponent},
    {path:'**',component:NotFoundComponent},
  ]},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
