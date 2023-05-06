import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import  {User} from '../model/user.model'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    users :User[];
   constructor(private auth :UserService ){

   }

  ngOnInit(): void {
    this.getAllUser();

  }
  getAllUser(){
      this.auth.getAllUser().subscribe(
        data =>{
           this.users= data ;
        },
        error =>{
           console.log(error)
        }
      )
  }

 

}
