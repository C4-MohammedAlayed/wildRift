import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject,BehaviorSubject,AsyncSubject   } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

 

//https://jsonplaceholder.typicode.com/posts
export class PostServiceService {
   subject = new Subject<any>();
  constructor(private http: HttpClient) { }
  getPosts():Observable<any>{
 return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  passPost(post:any){
    this.subject.next(post);
  }
  
}
