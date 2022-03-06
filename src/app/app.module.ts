import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductFilteringComponent } from './core/product-feature/product-filtering/product-filtering.component';
import { PagingComponent } from './layout/paging/paging.component';
import { TestComponent } from './test/test.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './core/product-feature/home/home.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { LoginComponent } from './admin/login/login.component';
import { AboutUsComponent } from './core/product-feature/about-us/about-us.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { ContactUsComponent } from './core/product-feature/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListingComponent,
    ProductItemComponent,
    ProductFilteringComponent,
    PagingComponent,
    TestComponent,
    DropdownComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
