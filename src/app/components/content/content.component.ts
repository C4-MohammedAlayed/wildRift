import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: MatDrawer;
  showFiller = false;
  typesOfLinks: string[] = ['Champions', 'login'];
  constructor() { }

  
  ngOnInit(): void {
  }
  
  
}
