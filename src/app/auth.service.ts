import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import{Item} from './item';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   apiURL = "https://qaapi.jahernotice.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.apiURL + '/api/Epp/0');
  }

  post(post:any): Observable<Item> {
    return this.httpClient.post<Item>(this.apiURL + '/Admin/SignUp', JSON.stringify(post), this.httpOptions)
  }
  login(post:any){
    return this.httpClient.get<any>(this.apiURL + `/Admin/SignIn?EmailOrMobileNo:=` + post.EmailOrMobileNo + `&Password=` + post.Password )
  }

  find(userID:number)  {
    return this.httpClient.get<any>(this.apiURL + '/api/EppByID/:' + userID)
  }

  delete(userId: number){
    return this.httpClient.get(this.apiURL + '/api/Epp/0' + userId, this.httpOptions)
  }

  forget(Email:any): Observable<Item> {
    return this.httpClient.post<Item>(this.apiURL + '/Admin/Password/send', + Email)
  }

  otp(Id : any): Observable<Item> {
    return this.httpClient.post<Item>(this.apiURL + '/Admin/OTP/verify', + Id)
  }

}
