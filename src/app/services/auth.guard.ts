import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  state:boolean | undefined 
  constructor( private authService:AuthService,private router: Router){

  }

  canActivate(
): Observable<boolean> | boolean  {
  console.log("what");
  
  this.authService.login().subscribe(res=>{
    res == "token"?( this.state=true):(this.state=false)
  })
  if (this.state) {
    console.log("hu");
    
    return true;
  }else{
    this.router.navigate(["/login"])
    return false
  }
   
  }
  
}
