import { Component, OnInit } from '@angular/core';
import { of, subscribeOn } from 'rxjs';
import { PostServiceService } from 'src/app/post-service.service';
import { ToDoService } from 'src/app/services/to-do.service';
import { TodoInterface } from './champion/to/to.component';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit {
  posts!: any[];
  show:boolean=false
  name:any
  constructor(private postServiceService: PostServiceService, private toDoService:ToDoService) {}

  todos:TodoInterface[]=[{
    id: 0,
    tasks: 'write',
    active: false
  },
  { id: 1,
    tasks: 'home',
    active: false}
]
// convert it to observable
// toDos$=of(this.toDo)
  ngOnInit(): void {
    this.toDoService.todoFromSubject$.next(this.todos)
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
      change(event:any){
        console.log(event.value);
        
      }
      addTodo(){
        this.todos.push( { id: 15,
          tasks: 'home',
          active: false})
          this.toDoService.todoFromSubject$.next(this.todos)
          console.log(this.todos);

      }
   
      
}
