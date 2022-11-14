import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContantModule } from './components/content/contant/contant.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule,ContantModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
