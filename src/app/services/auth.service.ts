import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const Url = environment.Url

@Injectable({
  providedIn: 'root'
})

// create login with real loggedin and token 
export class AuthService {

   token = of("token");
  constructor( private http:HttpClient) { }
    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    
  };
  // login(login:login):Observable<Object>{
  //   // return this.http.post(`${Url}User/Login`,{login},httpOptions)
  //   return this.token
  // }
  login():Observable<Object>{
    // return this.http.post(`${Url}User/Login`,{login},httpOptions)
    return this.token
  }
}
export interface login {
password:string,
email:string
}