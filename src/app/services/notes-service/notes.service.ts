import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Note } from '../../models/note';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class NotesService {

    constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

  public getAllNotes() : Observable<Note[]>{
      return this._http.get(myGlobals.API+"note/add")
         .map(result => result.json())
         .catch(this.handleError);

  }
  
  public getNote(id ) : Observable<Note> {
     return this._http.get(myGlobals.API+"note/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public createNote(note : Note) : Observable<Note>{

     return this._http.post(myGlobals.API+"note/add", note)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public updateNote(note : Note) : Observable<Note>{

     return this._http.put(myGlobals.API+"note/"+note._id,note)
           .map(result => result.json())
           .catch(this.handleError);

  }
  public deleteNote(id) : Observable<Note>{

     return this._http.delete(myGlobals.API+"note/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('NotesService::handleError', error);
    return Observable.throw(error);
  }

}
