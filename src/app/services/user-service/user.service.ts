import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { User } from '../../models/user';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {


  constructor(private _http:Http) { 

  	
  }
  
  getClients() {
      return this._http.get(myGlobals.API+"client/add")
         .map((result:Response) => result.json());
  }
  getClient(_id: String) {
      return this._http.get(myGlobals.API+"client/"+_id)
         .map((result:Response) => result.json());
  }

}
