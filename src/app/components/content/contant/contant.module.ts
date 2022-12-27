import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContantRoutingModule } from './contant-routing.module';
import { MaterialsModule } from 'src/app/share/materials/materials/materials.module';
import { ContentComponent } from '../content.component';
import { NavComponent } from '../../nav/nav.component';
import { AppComponent } from 'src/app/app.component';
import { LoginComponent } from '../../login/login.component';
import { ChampionsComponent } from '../../champions/champions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ ContentComponent,LoginComponent, NavComponent,ChampionsComponent],
  imports: [
    CommonModule,
    ContantRoutingModule,
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
 
})
export class ContantModule { }
