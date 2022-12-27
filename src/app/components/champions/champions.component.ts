import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PostServiceService } from 'src/app/post-service.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  posts!: any[];
  show:boolean=false
  name:any
  constructor(private postServiceService: PostServiceService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.show = true;
    this.postServiceService.getPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.posts = res;
      },
      complete: () => {
        this.postServiceService.passPost(this.posts?.length);
        this.show= false
      },
    });
  }
 

  // this is used to wait the user from typing in input
  myDebounes(cb:Function,d:number){
    let timer: string | number | NodeJS.Timeout | undefined;
     return function(...args: any){
      if (timer) clearTimeout(timer);
      timer = setTimeout(()=>{
    cb(...args)
      },d)
     }
    
     }
      showMe(){
        this.showMe= 
        this.myDebounes(()=>{
          console.log(this.name);
        },500)
      }
}
