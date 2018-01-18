import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Session } from '../../models/index';
import { UUID } from 'angular2-uuid';
import * as myGlobals from '../../globals/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';


@Injectable()
export class SessionsService {

 
	userConnected = myGlobals.CURRENT_CLIENT;
	private sess_id = UUID.UUID();

	constructor(private _http:Http) { 
		
  	
	}

	getSession(){
	
		let expiration_time = 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10,
			expiration : Date = new Date(Date.now() + (expiration_time)),
			session : Session = {

				expires : expiration,
				_id : this.sess_id,
        //cart_qty:0

			};


      if(!localStorage.getItem('currentSession') || new Date(Date.now()) < new Date(Date.now() - expiration_time)) {      


      	localStorage.setItem('currentSession',JSON.stringify(session));
        localStorage.setItem('cartQty',"0");



      } else {

      	JSON.parse(localStorage.getItem('current_session'));

      }

                 
       return localStorage.getItem('current_session');

                 
           
    }
    addCartItem(){
      //console.log('ajout ', myGlobals.CURRENT_SESSION.cart_qty);
      let cartQty =  parseInt(localStorage.getItem('cartQty'))+1 || 1;

      return localStorage.setItem('cartQty',cartQty.toString());

    }
    removeCartItem(){

     // return myGlobals.CURRENT_SESSION.cart_qty - 1;
    }
    getAllSessions() : Observable<Session[]>{
        return this._http.get(myGlobals.API+'sessions')
                 .map(result => result.json())
                 .catch(this.handleError);
                 
           
    }
   /* isLoggedIn(){
	  
	 return this.userConnected;

    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentSession');
    }*/
     private handleError (error: Response | any) {
    console.error('AuthService::handleError', error);
    return Observable.throw(error);
  }

}
