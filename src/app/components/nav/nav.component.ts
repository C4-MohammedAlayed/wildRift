import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input()drawer!:any
  constructor() { }

  ngOnInit(): void {
  }
toggle(): void {
  this.drawer.toggle();
}
}
