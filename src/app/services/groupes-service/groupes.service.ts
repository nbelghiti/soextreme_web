import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Groupes } from '../../models/groupes';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class GroupesService {


   constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  // /groupes/:id_client GET

  public getAllGroupesByClient(id_client: String) : Observable<Groupes[]>{
      return this._http.get(myGlobals.API+"groupes/"+id_client)
         .map(result => result.json())
         .catch(this.handleError);

  }
  // /groupes/all GET

  public getAllGroupes() : Observable<Groupes[]>{
      return this._http.get(myGlobals.API+"groupes/all")
         .map(result => result.json())
         .catch(this.handleError);

  }
  // /groupe/add POST

  public createGroupe(groupe : Groupes) : Observable<Groupes>{

     return this._http.post(myGlobals.API+"groupe/add", groupe)
         .map(result => result.json())
         .catch(this.handleError);

  }
  // /groupe/:groupe_id GET
  public getGroupe(id) : Observable<Groupes> {
     return this._http.get(myGlobals.API+"groupe/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }
  // /groupe/:groupe_id ¨PUT 
  public updateAmi(groupe : Groupes) : Observable<Groupes>{

     return this._http.put(myGlobals.API+"groupe/"+groupe._id,groupe)
           .map(result => result.json())
           .catch(this.handleError);

  }
  // /groupe/:groupe_id  DELETE
  public deleteAmi(id) : Observable<Groupes>{

     return this._http.delete(myGlobals.API+"groupe/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('GroupesService::handleError', error);
    return Observable.throw(error);
  }

}
