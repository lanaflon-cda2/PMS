import { Injectable } from '@angular/core';
import { Users } from '../../../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://ec2-3-135-228-192.us-east-2.compute.amazonaws.com:8081/portal';

  constructor(private http :HttpClient) {}

 
  public getUsers() {
    return this.http.get<Users[]>(this.url+ "/hospital_users");
  }

  public deleteUser(idu :number) {
    return this.http.delete(this.url + "/hospital_user/"+ idu);
  }

  public createUser(user :Users) {
    return this.http.post<Users>(this.url+ "/hospital_user", user);
  }

}
