import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { TodoInterface } from '../components/champions/champion/to/to.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
todoFromSubject$= new BehaviorSubject<TodoInterface[]>([]);
  constructor() { }

}
