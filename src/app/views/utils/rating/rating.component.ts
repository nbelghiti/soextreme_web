import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Note } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { NotesService, AuthService } from '../../../services/index';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  
  selected = 0;
  hovered = 0;
  id_act = this.route.snapshot.paramMap.get('id');
  id_cli = myGlobals.CURRENT_CLIENT._id;
  type_rating : String = "activite";
  isLoggedIn = this.auth.isLoggedIn();
  nCnt: number = 0;
  rating : Note = {

    note:null,
    type:this.type_rating,
    id_client : this.id_cli,
    id_act : this.id_act,
    _id:null
   
 };
 ctrl = new FormControl(null, Validators.required);
 

 constructor( private config: NgbRatingConfig,
              private route : ActivatedRoute,
              private router : Router,
              private note : NotesService,
              private auth : AuthService) {
              config.max = myGlobals.RATING_ACT;
            


  
  }
  disableRate(){
    if (this.isLoggedIn) {
       
       this.ctrl.enable();  

    } else {

        this.ctrl.disable();
        this.nCnt = 0;

    }    

  }

  createNote(){
 
    this.rating.note = this.selected;
    this.note.createNote(this.rating).subscribe(data => {console.log(data);});
  }
  onClick(){

    this.nCnt = this.nCnt + 1;

    if (this.nCnt >= 1) {

       this.ctrl.disable();
   
       if (this.nCnt == 1) {
         
           this.createNote();

       }

     // else if le client est connecté mais n'a pas participé à cette activité ==>  this.ctrl.disable();

    } else{

       this.ctrl.enable();
    }

  }

  ngOnInit() {

    this.disableRate();

  }


}
