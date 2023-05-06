import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Annonce } from '../pages/model/annomnes.model';
import { Observable } from 'rxjs';
import { User } from '../pages/model/user.model';
import { Role } from '../pages/model/role.model';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  annonces: Annonce[];
  users :User[];
  roles :Role[];
  constructor(private httpClient: HttpClient, private auth: AuthenticationService) {


  }

  getAllAnnounces():Observable<Annonce[]> {
    const headers = new HttpHeaders({'authorization' :'Bearer' + this.auth.jwt});
    return this.httpClient.get<Annonce[]>(this.auth.host +'/annonces',{ headers: headers });

  }



  getAllRessources(path:string) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.get(this.auth.host + path, { headers: headers });
  }

  public postRessource(path:string, data:any) {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.post(this.auth.host+path, data, { headers: headers });
  }


  addAnnonce(annonce: Annonce): Observable<Annonce> {
    const headers = new HttpHeaders({ 'authorization': 'Bearer' + this.auth.jwt });
    return this.httpClient.post<Annonce>(`${this.auth.host}/annonces`, annonce,{ headers: headers });
  }

   addRole(role: Role): Observable<Role> {
    const headers = new HttpHeaders({ 'authorization': 'Bearer ' + this.auth.jwt });
    return this.httpClient.post<Role>(`${this.auth.host}/save`, role, { headers: headers });
  }


  getAllRoles(): Observable<Role[]> {
    const headers = new HttpHeaders({'authorization' :'Bearer' + this.auth.jwt});
    return this.httpClient.get<Role[]>(this.auth.host +'/roles',{ headers: headers });

  }




}
