import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


import { UserClass } from '../user-class';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<UserClass[]> | any;

  constructor( private userService: UserServiceService,
    private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.users= this.userService.findallusers();
  }

  retailerDetails(id: number){
    this.router.navigate(['productdetails', id]);
  }

  editretailer(id: number) {
    this.router.navigate(['updateproduct',id])  // navigate to component from a method
  }

  deleteretailer(id: number) {
    this.userService.deleteuser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  register() {
    console.log("Register Page");
    this.router.navigate(['userRegister']);
  }

}
