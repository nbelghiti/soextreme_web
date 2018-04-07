import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { NgModule, Component, ElementRef, NgZone} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe,Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserService, LoginService, ActivitesService, AuthService, CartService, DateService,
         GerantService, ReservationService, NotesService, CommentairesService, PhotosService, 
         SessionsService, LoaderPageService, MetasService, AmisService, GroupesService } from './services/index';
import { OrderbyPipe } from './pipes/orderby.pipe';
import {appRoutes, AppRoutingModule} from './app-routing/app-routing.module';
    import { RouterModule } from '@angular/router';


// 6Le0AkgUAAAAAJxO8mZYTzD9HGOgVzrhg-Sf9QVr
@NgModule({
  declarations: [
    AppComponent ,
    OrderbyPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule
  ],
  providers: [

    ActivitesService,
    LoginService,
    UserService,
    AuthService,
    GerantService,
    Title,
    Meta,
    CartService,
    ReservationService,
    CommentairesService,
    DateService,
    NotesService,
    PhotosService,
    SessionsService,
    LoaderPageService,
    MetasService,
    AmisService,
    GroupesService,
    DatePipe

    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
