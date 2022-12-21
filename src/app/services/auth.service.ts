import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';




const Url = environment.Url

@Injectable({
  providedIn: 'root'
})

// create login with real loggedin and token 
export class AuthService {

  
  constructor( private http:HttpClient) { }
  isLoggedIn$ = new Subject();
    
  login(email:string,password:string):Observable<any>{
    console.log("hi");
    
    return this.http.post(`${Url}login`,{email,password}).pipe(map(res=>{
      localStorage.setItem('token', JSON.stringify(res));
      this.isloggedin(true)
      return res;
    }))
  }
  
  isloggedin(state:boolean){
  this.isLoggedIn$.next(state)
  }
}

export interface login {
password:string,
email:string
}