import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Activites } from '../../models/activites';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ActivitesService {
    	

  constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  public getAllActivites() : Observable<Activites[]>{
      return this._http.get(myGlobals.API+"activite/add")
         .map(result => result.json())
         .catch(this.handleError);

  }

  public getPrice(prix : number, remise : number){

    if (remise !== null){
      prix = prix - remise;
    
    }
    return prix;
  }
  
  public getActivite(id ) : Observable<Activites> {
     return this._http.get(myGlobals.API+"activite/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public createActivite(activity : Activites) : Observable<Activites>{

     return this._http.post(myGlobals.API+"activite/add", activity)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public updateActivite(activity : Activites) : Observable<Activites>{

     return this._http.put(myGlobals.API+"activite/"+activity._id,activity)
           .map(result => result.json())
           .catch(this.handleError);

  }
  public deleteActivite(id) : Observable<Activites>{

     return this._http.delete(myGlobals.API+"activite/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('ActivitesService::handleError', error);
    return Observable.throw(error);
  }

}
