import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  email = '';
  firstName = 'lol';
  constructor(private auth: AuthenticationService,private router:Router){
     this.email= auth.email;

    }



  ngOnInit(): void {
    this.getFirstName();
    console.log("email",this.email);
    console.log("first",this.firstName);
  }






  OnDeconnexion(){
    console.log("deconnect");
    this.auth.logOut();
    this.router.navigate(['/index'])

  }
  getFirstName(){
    this.auth.getFirstnameByEmail("user@mail.com").subscribe(
      (data: any) => {
        this.firstName = data;
        console.log('het ',data);
      }
    );
  }
}


