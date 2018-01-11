import { Component } from '@angular/core';
import  * as myGlobals from './globals/index';
import { SessionsService } from './services/index';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {

  constructor(private session : SessionsService) {

  	this.getSession();
  }

  
  getSession(){

    this.session.getSession();

  }

}
