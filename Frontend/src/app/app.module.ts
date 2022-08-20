import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CompareComponent } from './compare/compare.component';
import { UsersListComponent } from './users-list/users-list.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchComponent } from './search/search.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { WatchesComponent } from './watches/watches.component';
import { TvComponent } from './tv/tv.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLogoutComponent,
    AddProductComponent,
    CartComponent,
    MobilesComponent,
    LaptopsComponent,
    CompareComponent,
    UsersListComponent,
    DisplayComponent,
    HomeComponent,
    ListProductsComponent,
    LoginAdminComponent,
    LoginUserComponent,
    OrdersComponent,
    PaymentComponent,
    ProductDetailsComponent,
    RegisterUserComponent,
    UserLogoutComponent,
    UserProfileComponent,
    SearchComponent,
    UpdateProductComponent,
    AdminProductListComponent,
    WatchesComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
