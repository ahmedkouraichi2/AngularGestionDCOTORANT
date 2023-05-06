import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../pages/model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users :User[];
  constructor(private httpClient: HttpClient, private auth: AuthenticationService) { }



  getAllUser():Observable<User[]> {
    const headers = new HttpHeaders({'authorization' :'Bearer' + this.auth.jwt});
    return this.httpClient.get<User[]>(this.auth.host +'/users',{ headers: headers });

  }

  getUserById(id:number):Observable<User> {
    const headers = new HttpHeaders({'authorization' :'Bearer' + this.auth.jwt});
    return this.httpClient.get<User>(this.auth.host+ '/'+$`{id}`,{headers:headers} )

  }
}
