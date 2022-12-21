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

  myForm!:FormGroup
  constructor(private authService:AuthService,private router: Router ) { }

  ngOnInit(): void {
    this.init()
  }
 sign(){
  let {email,password} = this.myForm.value
  this.authService.login(email,password).subscribe(res=>{
    this.router.navigate(["/Content"]);
  })
  
}
init(){
  this.myForm = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
  
} 
}
