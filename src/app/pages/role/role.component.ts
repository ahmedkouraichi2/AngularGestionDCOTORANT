import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Role } from '../model/role.model';
import { error } from 'jquery';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent  implements OnInit{
   roles : Role[]=[];
   newRole :Role = {
      id :0,
      roleName : ""
   }
   constructor(private auth:AnnonceService){
   }

   ngOnInit(): void {
    this.getAllRole();
  }



  addRole(){
    this.auth.addRole(this.newRole).subscribe(
      data => {
         console.log("nouvelle annonce",this.newRole);
      },
      error => {
        console.log(error);
      }
    );
  }



  getAllRole(){
    this.auth.getAllRoles().subscribe(
     data => {
        console.log("thisrole",data);
        this.roles = data ;
     },
     err =>{
        console.log(err)
     }


    )


 }

}
