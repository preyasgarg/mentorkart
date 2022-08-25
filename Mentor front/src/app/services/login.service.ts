import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(user: any) {
    //console.log('before ' + this.isUserLoggedIn());

    if(user.role=== 'mentee')
    {
      return this.http.post(`${environment.baseUrl}/mentee/login/`, user);

    }else
    {
      return this.http.post(`${environment.baseUrl}/mentor/login/`, user);

    }
  }

  //set userDetail
  public setUser(user : any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isUserLoggedIn() {
    let user = localStorage.getItem('user')
    return !(user === null)
  }

  //getUser
  public getUser() {

    console.log("Reached getUser()")
    let userStr = localStorage.getItem('user');
    console.log("userString row " +userStr)
    if (userStr != null) {
      console.log("user strin JSON" + JSON.parse(userStr));
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  logout(){
    localStorage.removeItem('user')
  }
}