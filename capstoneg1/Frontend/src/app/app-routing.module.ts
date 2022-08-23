import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
//import { RegisterAdminComponent } from './register-admin/register-admin.component'; //not need
//import { LoginRetailerComponent } from './login-retailer/login-retailer.component';
//import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { RetailerProfileComponent } from './retailer-profile/retailer-profile.component';

import { UserLogoutComponent } from './user-logout/user-logout.component';
import { MobilesComponent } from './mobiles/mobiles.component';

//import { RetailerProductListComponent } from './retailer-product-list/retailer-product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

//import { DealersListComponent } from './dealers-list/dealers-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { DisplayComponent } from './display/display.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { WatchesComponent } from './watches/watches.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  //{path:"",redirectTo:"adminLogin",pathMatch:"full"},
  {path:'home', component: HomeComponent},
  {path:'adminLogin',component:LoginAdminComponent},
  //{path:'adminRegister',component:RegisterAdminComponent},
  //{path:'retailerLogin',component:LoginRetailerComponent}, --->>Admin Login
  //{path:'retailerRegister',component:RegisterRetailerComponent},
  {path:'userLogin',component:LoginUserComponent},
  {path:'userRegister',component:RegisterUserComponent},
  {path:"addproducts",component:AddProductComponent},
  {path:"listproducts",component:ListProductsComponent},
  {path:"userprofile/:email",component:UserProfileComponent},
  //{path:"retailerprofile",component:RetailerProfileComponent},-->User Profile
  //{path:"sports",component:SportsComponent},
  {path:"Mobiles",component:MobilesComponent},
  {path:"Laptops",component:LaptopsComponent},
  //{path:"clothes",component:ClothesComponent},
  //{path:"homeappliances",component:HomeAppliancesComponent},
 // {path:"gadgets",component:GadgetsComponent},
  {path:"userLogout",component:UserLogoutComponent},
  {path:"productlist",component:AdminProductListComponent},
  {path:"updateproduct/:id",component:UpdateProductComponent},
  {path:"productdetails/:id",component:ProductDetailsComponent},
  
  {path:"adminlogout",component:AdminLogoutComponent},
  //{path:"retailerslist",component:DealersListComponent},
  {path:"usersList",component:UsersListComponent},
  {path:"cart",component:CartComponent},
  {path:"compare",component:CompareComponent},
  {path:"search/:name",component:SearchComponent},
  {path:"payment",component:PaymentComponent},
  {path:"display",component:DisplayComponent},
  {path:"orders",component:OrdersComponent},
  {path:"Watches",component:WatchesComponent},
  {path:"Tv",component:TvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
