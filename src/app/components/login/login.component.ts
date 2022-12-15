import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, login } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean =true;
  Login!:login
  myForm!:FormGroup
  constructor(private authService:AuthService,private router: Router ) { }

  ngOnInit(): void {
    this.init()
  }
sign(){
  this.Login=this.myForm.value
  this.authService.login().subscribe(res=>{
   res=="token"?(this.router.navigate(["/Content"])):(null);
    
  })
}
init(){
  this.myForm = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
} 
}
