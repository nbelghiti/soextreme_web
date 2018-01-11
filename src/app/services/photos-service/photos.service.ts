import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Photo } from '../../models/index';
import * as myGlobals from '../../globals/global';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class PhotosService {


  constructor(private _http:Http,private route: ActivatedRoute,
    private router: Router) { }

   // /photo/afficher/:image_nom --> affichage image uploadee
  // /photo/afficher --> afficher toutes les images
  // /photo/add --> ajouter photo
  // 
  
  upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);

    return this._http
        .post(myGlobals.API+"photo/add", input);
        // .map(result => result.json())
         //.catch(this.handleError);
}
  public getAllPhoto() : Observable<Photo[]>{
      return this._http.get(myGlobals.API+"photo/afficher")
         .map(result => result.json())
         .catch(this.handleError);

  }

  public getPhoto(id ) : Observable<Photo> {
     return this._http.get(myGlobals.API+"photo/afficher/"+id)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public createPhoto(photo : Photo) : Observable<Photo>{

     return this._http.post(myGlobals.API+"photo/add", photo)
         .map(result => result.json())
         .catch(this.handleError);

  }

  public updatePhoto(photo : Photo) : Observable<Photo>{

     return this._http.put(myGlobals.API+"photo/afficher/"+photo._id,photo)
           .map(result => result.json())
           .catch(this.handleError);

  }
  public deletePhoto(id) : Observable<Photo>{

     return this._http.delete(myGlobals.API+"photo/afficher/"+id)
           .map(result => result.json())
           .catch(this.handleError);

  }


  private handleError (error: Response | any) {
    console.error('PhotosService::handleError', error);
    return Observable.throw(error);
  }
}
