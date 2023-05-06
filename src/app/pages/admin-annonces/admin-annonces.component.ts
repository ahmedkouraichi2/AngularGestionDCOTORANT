import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/services/annonce.service';
import { Annonce } from '../model/annomnes.model';

@Component({
  selector: 'app-admin-annonces',
  templateUrl: './admin-annonces.component.html',
  styleUrls: ['./admin-annonces.component.css']
})
export class AdminAnnoncesComponent implements OnInit {
  success = false ;
  error= false ;
  nouvelleAnnonce: Annonce ={
    id: 0,
    title: '',
    contenu: '',
    date: new Date,
    urgence: ''
  };


   annonceClicked:any ;
   closeResult:any ;
   mode = 'list';
   annonces:any;
   pageOfItems :Array<any>;
  constructor( private annonceService: AnnonceService){

  }

  ngOnInit(): void {
    this.annonceService.getAllAnnounces().subscribe(
      data => {
        this.annonces = data;
      },
      error => {
        console.log(error);
        this.error = true ;
      }
    );
  }





  onCancel(){
     this.mode = 'list' ;
  }

  onChangePage(pageOfItems :Array<any>){
      console.log(pageOfItems);
  }

  getAllAnnonce(){
     this.annonceService.getAllAnnounces().subscribe(
      data => {
         this.annonces = data ;
      },
      err =>{
         console.log(err)
      }


     )


  }

  onNewAnnonce(){
     if(this.mode != 'new-annonce'){
       this.mode = 'new-annonce' ;
     }else{
        this.mode = 'list'
     }
  }


  onSaveAnnonce(value:any){
     console.log(value);
     this.mode = 'list'
     const path = '/annonces';
     this.annonceService.postRessource(path,value).subscribe(
       data => { this.getAllAnnonce();
       },
       err =>{
         console.log(err) ;
       }
     )
  }


  ajouterAnnonce(): void {
    this.annonceService.addAnnonce(this.nouvelleAnnonce).subscribe(
      data => {
         console.log("nouvelle annonce",this.nouvelleAnnonce);
         this.success= true;
      },
      error => {
        console.log(error);

      }
    );
  }

}
