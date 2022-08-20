import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
//import { RetailerServiceService } from './retailer-service.service';
import { AdminServiceService } from './admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name =''
  title = 'Electronic Store';
  imagePath='/assets/images/shopping.png';

  constructor(
    public userloginService:UserServiceService,
    //public retailerloginservice:RetailerServiceService,
    public adminloginservice:AdminServiceService,
    public router:Router) { }

  check() {

    if(this.userloginService.isUserLoggedIn()) {

      this.router.navigate(['userprofile',this.userloginService.email]);
    }
  }

  ordercheck(){
    if(this.userloginService.isUserLoggedIn()) {

      this.router.navigate(['orders']);
    }
  }

  Search() {
    this.router.navigate(['search',this.name]);
  }

};
