import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-backlink',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  title : String = '';
  nb_article : String = JSON.parse(localStorage.getItem("cart_qty"));
  used_trans : string='';
  
 constructor(private _location: Location, private translate : TranslateService) {    }
  backClicked() {
        this._location.back();
  }
  getTitleButton(){
    console.log(this.nb_article);
  	if (this._location.path() == '/mon-panier' && (this.nb_article !== null)) {

       this.used_trans = "backlinks.continue";

  	} else {

  		 this.used_trans = "backlinks.back";

  	}
    this.translate.get(this.used_trans).subscribe((res: String)=>{
        this.title = res;      
    });
  	return this.title;
  }
  ngOnInit() {

  	this.getTitleButton();
  }

}
