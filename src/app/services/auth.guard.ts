import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  state:any =false 
  token:string|null=null
  constructor( private authService:AuthService,private router: Router
    ){

  }

  canActivate(
): Observable<boolean> | boolean  {
  this.token= localStorage.getItem('token');
  this.authService.isLoggedIn$.subscribe(res=>{
   this.state=res
  })
  if (this.state || this.token) {
    console.log(this.token,this.state);
    
    return true;
  }else{
    this.router.navigate(["/login"])
    return false
  }
   
  }
  
}
