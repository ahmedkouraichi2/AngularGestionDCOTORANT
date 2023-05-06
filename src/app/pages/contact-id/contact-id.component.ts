import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-id',
  templateUrl: './contact-id.component.html',
  styleUrls: ['./contact-id.component.css']
})
export class ContactIdComponent implements OnInit {
 public userUpdate :User ;

  constructor( private route: ActivatedRoute, private userService :UserService){

  }
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    console.log("hhhh"+id);
    if (id) {
      const userId = +id;
      console.log(typeof(userId));
      this.userService.getUserById(userId).subscribe(
        data => {
             this.userUpdate = data ;
             console.log(this.userUpdate);
        })

    } else {
      // handle case where id is null
    }
       return ;
  }

}
