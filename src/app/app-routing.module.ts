import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './core/product-feature/home/home.component';
import { AboutUsComponent } from './core/product-feature/about-us/about-us.component';


// lazy loading
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'',component:ProductListingComponent},

  // {path:'home',redirectTo: '',pathMatch:'full'},
  {path:'product',children:[
    {path:'listing', component:ProductListingComponent},
    {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductFormComponent},
    {path:'edit/:productId',component:ProductFormComponent},
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
