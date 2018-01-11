import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Reservation } from '../../models/index';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';


@Injectable()
export class ReservationService {

  Products : Reservation[]  = [];
  constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  public getAllReservations() : Observable<Reservation[]>{
      return this._http.get(myGlobals.API+"reservation/add")
         .map(result => result.json())
         .catch(this.handleError);

  }
   public getAllReservationsByClient(id_cli) : Observable<Reservation[]>{
      return this._http.get(myGlobals.API+"reservation/add")
         .map(result => result.json())
         .catch(this.handleError);

  }
  
  public getReservation(id ) : Observable<Reservation> {
     return this._http.get(myGlobals.API+"reservation/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }


  public createReservation(reservation : Reservation) : Observable<Reservation>{

     return this._http.post(myGlobals.API+"reservation/add", reservation)
         .map(result =>{
           let reservation = result.json();

           this.Products.push(reservation);
           return this.Products;
         })
         .catch(this.handleError);

  }

  public updateReservation(reservation : Reservation) : Observable<Reservation>{

     return this._http.put(myGlobals.API+"reservation/"+reservation._id,reservation)
           .map(result => result.json())
           .catch(this.handleError);

  }
  public deleteReservation(id) : Observable<Reservation>{

     return this._http.delete(myGlobals.API+"reservation/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('ReservationsService::handleError', error);
    return Observable.throw(error);
  }

}
