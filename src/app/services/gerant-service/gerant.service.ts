import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Gerant } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GerantService {

 
	constructor(private _http:Http) { 
		
  	
	}

	public login (login_gerant : Gerant) : Observable<Gerant>{
        return this._http.post(myGlobals.API+'gerant/login', login_gerant)
                 .map(result =>{ 
                         let gerant = result.json();
                         if (gerant ) {
                           localStorage.setItem('currentGerant', JSON.stringify(gerant));
                         }
 
                        return gerant;
                 });
                 
           
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentGerant');
    }
     private handleError (error: Response | any) {
    console.error('GerantService::handleError', error);
    return Observable.throw(error);
  }

}
