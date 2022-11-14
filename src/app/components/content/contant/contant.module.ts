import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContantRoutingModule } from './contant-routing.module';
import { MaterialsModule } from 'src/app/share/materials/materials/materials.module';
import { ContentComponent } from '../content.component';
import { NavComponent } from '../../nav/nav.component';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from '../../login/login.component';


@NgModule({
  declarations: [ ContentComponent,LoginComponent, NavComponent,AppComponent],
  imports: [
    CommonModule,
    ContantRoutingModule,
    MaterialsModule
  ]
})
export class ContantModule { }
