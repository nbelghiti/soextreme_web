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
export class CartService {

  Products : Reservation[]= [];

  constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }


  addProduct(product :any){

  	this.Products.push(product);
  	console.log('Add to the list : ',this.Products);

  }

  removeProduct(id : any){

  	this.Products = this.Products.filter((item) =>  item._id !== id );
  	  	console.log('Remove from the list: ',this.Products);


  }
  private handleError (error: Response | any) {
    console.error('CartService::handleError', error);
    return Observable.throw(error);
  }

}
