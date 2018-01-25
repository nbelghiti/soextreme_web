import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Amis } from '../../models/amis';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class AmisService {
  
   constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  // /amis/:id_client GET

  public getAllAmisByClient(id_client: String) : Observable<Amis[]>{
      return this._http.get(myGlobals.API+"amis/"+id_client)
         .map(result => result.json())
         .catch(this.handleError);

  }
    // /mesamis/:id_groupe GET

  public getAllAmisByGroupe(id_groupe: String) : Observable<Amis[]>{
      return this._http.get(myGlobals.API+"mesamis/"+id_groupe)
         .map(result => result.json())
         .catch(this.handleError);

  }
 // /ami/:ami_id GET 
  public getAmi(id) : Observable<Amis> {
     return this._http.get(myGlobals.API+"ami/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }
  // /ami/add POST

  public createAmi(ami : Amis) : Observable<Amis>{

     return this._http.post(myGlobals.API+"ami/add", ami)
         .map(result => result.json())
         .catch(this.handleError);

  }
 // /ami/:ami_id UPDATE 
  public updateAmi(ami : Amis) : Observable<Amis>{

     return this._http.put(myGlobals.API+"ami/"+ami._id,ami)
           .map(result => result.json())
           .catch(this.handleError);

  }
   // /ami/:ami_id DELETE 
  public deleteAmi(id) : Observable<Amis>{

     return this._http.delete(myGlobals.API+"activite/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('AmisService::handleError', error);
    return Observable.throw(error);
  }

}
