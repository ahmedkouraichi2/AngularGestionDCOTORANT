import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  errorMessage :string = "erroor" ;


  constructor(private router: Router, private auth: AuthenticationService, private httpClient: HttpClient){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin(user:any) {
    this.errorMessage='';
    console.log(user);
    this.auth.login(user)
      .subscribe(
        resp => {

          //this.auth.convertToUser_= true;
          let jwt = resp.headers.get('Authorization');
          this.auth.saveToken(jwt);

          this.router.navigateByUrl("/menu");
        },
        err => {
          console.log(err);
          this.errorMessage='Vérifier vos informations';

         }
      );
    // this.router.navigateByUrl("/menu");
  }



  isAdmin() {
    return this.auth.isAdmin();
  }

  isUser() {
    return this.auth.isUser();
  }

  isAuthentificated() {
    return this.auth.isAuthentificated();
  }


}
