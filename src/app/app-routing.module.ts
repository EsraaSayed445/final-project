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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContactUsComponent } from './core/product-feature/contact-us/contact-us.component';
import { ViewCartComponent } from './core/product-feature/view-cart/view-cart.component';
import { CheckoutComponent } from './core/product-feature/checkout/checkout.component';
import { OrderComponent } from './admin/dashboard/order/order.component';
import { ContactComponent } from './admin/dashboard/contact/contact.component';
import { AuthGuard } from './_services/auth.guard';
import { AuthRoleGuard } from './_services/auth-role.guard';
import { PaidComponent } from './core/product-feature/paid/paid.component';
import { ThanksPageComponent } from './core/product-feature/thanks-page/thanks-page.component';
import { ProductFilteringComponent } from './core/product-feature/product-filtering/product-filtering.component';
import { CategoryComponent } from './core/product-feature/category/category.component';

// lazy loading
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'dashboard',component:DashboardComponent, canActivate:[AuthGuard, AuthRoleGuard],data:{role:"admin"}},
  {path:'about',component:AboutUsComponent},
  {path:'',component:ProductListingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'contact-us',component:ContactUsComponent, canActivate:[AuthGuard]},
  {path:'view-cart',component:ViewCartComponent},
  {path:'checkout',component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'order',component:OrderComponent, canActivate:[AuthGuard, AuthRoleGuard],data:{role:"admin"}},
  {path:'contact',component:ContactComponent, canActivate:[AuthGuard]},
  {path:'paid',component:PaidComponent},
  {path:'thanks-for-contact-us',component:ThanksPageComponent},
  {path:'categories',component:CategoryComponent, canActivate:[AuthGuard, AuthRoleGuard],data:{role:"admin"}},
  
  // {path:'home',redirectTo: '',pathMatch:'full'},
  {path:'product',children:[
    {path:'listing', component:ProductListingComponent},
    {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductFormComponent, canActivate:[AuthGuard, AuthRoleGuard],data:{role:"admin"}},
    {path:'edit/:productId',component:ProductFormComponent, canActivate:[AuthGuard, AuthRoleGuard],data:{role:"admin"}},
    {path:'categories/:categoryId',component: ProductListingComponent},
    {path:'**',component:NotFoundComponent},
  ]},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
