import { Component, OnInit } from '@angular/core';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import * as myGlobals from '../../../globals/index';
import * as myLocales from '../../../../assets/locales.json';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.css']
})
export class LanguesComponent implements OnInit {

  langues : Array<String> = (<any>myLocales).locales;
  other_lang :  Array<String> = [];
  langue_cur : any;
  constructor(private translate: TranslateService) {
	  
    translate.setDefaultLang(myGlobals.LANGUE);
  	this.getCurrentLangue();

  }
  getCurrentLangue(){
  	if (localStorage.getItem("langue") === null || localStorage.getItem("langue") === "undefined") {
		this.langue_cur = myGlobals.LANGUE;
    localStorage.setItem("langue",JSON.stringify(this.langue_cur));

	} else {

		this.langue_cur = JSON.parse(localStorage.getItem("langue"));
	}   

  this.translate.use(this.langue_cur);

  }
  onClick(event){
  let new_lang = event.toElement.innerHTML;
	this.translate.use(new_lang);
	localStorage.setItem("langue",JSON.stringify(new_lang));
	setTimeout(() => {this.langue_cur = JSON.parse(localStorage.getItem("langue"));}, 500);
	location.reload();
  }
  getOtherLang(){

  	for (var i = 0; i < this.langues.length; i++) {
  		if (this.langue_cur !== this.langues[i]) {
  	  		this.other_lang.push(this.langues[i]);

  		}

  	}
  		

  }
 
  ngOnInit() {
  	this.getOtherLang();
  }


}
