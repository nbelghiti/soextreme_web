import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { User } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class AuthService {

	userConnected = myGlobals.CURRENT_CLIENT;

	constructor(private _http:Http) { 
		
  	
	}

	public login (login_user : User) : Observable<User>{
        return this._http.post(myGlobals.API+'client/login', login_user)
                 .map(result =>{ 
                         let user = result.json();
                         if (user ) {
                           localStorage.setItem('currentUser', JSON.stringify(user));
                         }
 
                        return user;
                 })
                 .catch(this.handleError);
                 
           
    }
    public createClient (client : User) : Observable<User>{
        return this._http.post(myGlobals.API+'client/add', client)
                .map(result =>{ 
                         let res = result.json();
                         if (res ) {
                           localStorage.setItem('currentUser', JSON.stringify(client));
                         }
 
                        return client;
                 })
                 .catch(this.handleError);
                 
           
    }

     public getClient(id ) : Observable<User> {
     return this._http.get(myGlobals.API+"client/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }


     public updateClient (client : User) : Observable<User>{

     return this._http.put(myGlobals.API+"client/"+client._id,client)
           .map(result => result.json())
           .catch(this.handleError);

    }
    
    public getAllClients () : Observable<User[]>{
        return this._http.get(myGlobals.API+'client/login')
                 .map(result => result.json())
                 .catch(this.handleError);
                 
           
    }
    isLoggedIn(){
	  
	 return this.userConnected;

    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
     private handleError (error: Response | any) {
    console.error('AuthService::handleError', error);
    return Observable.throw(error);
  }

}
