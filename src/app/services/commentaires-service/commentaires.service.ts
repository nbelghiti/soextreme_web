import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Commentaires } from '../../models/commentaires';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class CommentairesService {

  constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  public getAllCommentaires() : Observable<Commentaires[]>{
      return this._http.get(myGlobals.API+"commentaire/add")
         .map(result => result.json())
         .catch(this.handleError);

  }
  
  public getCommentaire(id ) : Observable<Commentaires> {
     return this._http.get(myGlobals.API+"commentaire/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public createCommentaire(comment : Commentaires) : Observable<Commentaires>{

     return this._http.post(myGlobals.API+"commentaire/add", comment)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public updateCommentaire(comment : Commentaires) : Observable<Commentaires>{

     return this._http.put(myGlobals.API+"commentaire/"+comment._id,comment)
           .map(result => result.json())
           .catch(this.handleError);

  }
  public deleteCommentaire(id) : Observable<Commentaires>{

     return this._http.delete(myGlobals.API+"commentaire/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('CommentairesService::handleError', error);
    return Observable.throw(error);
  }


}
