import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-photos-gestion',
  templateUrl: './photos-gestion.component.html',
  styleUrls: ['./photos-gestion.component.css']
})
export class PhotosGestionComponent implements OnInit {
 word = [];
selected : any;
  radioGroupForm: FormGroup;
  /*group: boolean = false;
  usersGroup : boolean = false;*/
  showInput : boolean = false;
  myText: any;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.word.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  constructor(private formBuilder: FormBuilder) {
  	this.radioGroupForm = this.formBuilder.group({
      'model': 'all',
      'myText':'myText'
    });
    
  }
 
  
  getResultSearch(){
	
	this.selected = this.radioGroupForm.get('model').value;
  	if(this.radioGroupForm.get('model').value ==='users'
  	|| this.radioGroupForm.get('model').value ==='group'){

  		this.showInput = true;
	  	if(this.radioGroupForm.get('model').value ==='users'){

	  		this.word = ['aaa','bbb','ccc'];
	  	} else {
	  		this.word = ['ddd','eee','fff'];
	  	}
  	} else {
  		this.showInput = false;
  	}
  	
  }
  getCheckVal(){
  	this.getResultSearch();
  }
  ngOnInit() {
    
  }
}
