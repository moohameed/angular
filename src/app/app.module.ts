import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FotterComponent } from './fotter/fotter.component';
import { Page404Component } from './page404/page404.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule } from '@angular/common/http' ;
// service declaration
import {DataService} from './services/data.service' ;





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PeopleListComponent,
    NavbarComponent,
    FotterComponent,
    Page404Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
