import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/post-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input()drawer!:any
PostNumber:any=0;
  constructor(private postServiceService:PostServiceService) { }

  ngOnInit(): void {
    this.postServiceService.subject.subscribe(subject =>{this.PostNumber=subject})
 
    
    console.log("hi");
    
  }
toggle(): void {
  this.drawer.toggle();
}
}
