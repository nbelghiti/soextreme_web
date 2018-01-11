import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {


  private isUserLogged;
  private username;
  private password;
  constructor(private _http:Http) { 

  	this.isUserLogged=false;

  

  }
  setUserLoggedIn(){
  	this.isUserLogged=true;
  }
  getUserLoggedIn(){

    return this.isUserLogged;


  }  
  getLog(user) {
     /* return this._http.post(myGlobals.API+"client/login",JSON.stringify({ username: username, password: password }))
         .map((result:Response) =>{ 

         	let user = result.json();
         	return user;


         });*/
          return this._http.post(myGlobals.API+"client/login", user)
         .map((result:Response) =>{ 

         	let muser = result.json();
         	return muser;


         })
         .subscribe(
        // We're assuming the response will be an object
        // with the JWT on an id_token key
        data => console.log(data),
        error => console.log(error)
      );
  }
}
