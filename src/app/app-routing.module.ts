import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


// lazy loading 
const routes: Routes = [
  {path:'',component:ProductListingComponent},
  {path:'home',redirectTo: '',pathMatch:'full'},
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
