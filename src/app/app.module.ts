import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContantModule } from './components/content/contant/contant.module';
import { AppRoutingModule } from './app-routing.module';
import { ChampionsComponent } from './components/champions/champions.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule ,AppRoutingModule,HttpClientModule ]
})
export class AppModule {}
