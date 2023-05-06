import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService, private httpClient: HttpClient) { }


  ngOnInit(): void {

    $(document).ready(function(){
      $(".hamburger").click(function(){
        $(".wrapper").toggleClass("active")
      })
    });
  }



      isAdmin() {
        if (this.auth.isAdmin()) {
          return true;
        }

        return '';
      }

      isUser(){
         if(this.auth.isUser()){
           return
         }
      }


      OnDeconnexion(){
        console.log("deconnetion") ;
        this.auth.logOut();
        this.router.navigate(['/index']);
      }
  }

