import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent  implements OnInit{
    annonces :any;
   constructor(private annonceService: AnnonceService){

   }
  ngOnInit(): void {
    this.getAllAnnonce();
  }

  getAllAnnonce(){
     this.annonceService.getAllAnnounces().subscribe(
       data => {
        this.annonces = data ;
       },

       err =>{
         console.log(err)
       }
     );
  }







}
