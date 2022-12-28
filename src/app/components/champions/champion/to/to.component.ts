import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
  //when import this child on parent it will rerener every time in the parent component even that nothing change
  //so we can solve this bugs by use   *changeDetection:ChangeDetectionStrategy.OnPush* 
  // so ths component will re-rener only if any change happens in ths component.
})
export class ToComponent implements OnInit {
@Input("todo")  todo!:TodoInterface
toDoSubject$!:Observable<TodoInterface[]>
 
  constructor( private toDoService:ToDoService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {
 this.toDoSubject$=this.toDoService.todoFromSubject$
    
  }
check(){
  console.log("how many renders");
  return true
  
}
}

export interface TodoInterface {
  id:number;
  tasks:string;
  active:boolean;
  }
