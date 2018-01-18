import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Activites,  Reservation, Note } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,NotesService, AuthService,DateService } from '../../../services/index';

@Component({
  selector: 'app-admin-notes',
  templateUrl: './admin-notes.component.html',
  styleUrls: ['./admin-notes.component.css']
})
export class AdminNotesComponent implements OnInit {

  ratings : any = [];
  id_cli_note : any ;
  id_act_note : any;
  date_note : any = [];
  user_info_note : any = [];
  act_note : any = [];
  type_note : String = "activite";

  constructor(private notes : NotesService,
  			      private route : ActivatedRoute,
              private router : Router,
              private config: NgbRatingConfig,
              private activite : ActivitesService,
              private date : DateService,
              private auth : AuthService) {


      config.readonly = true;
      config.max = myGlobals.RATING_ACT;

  }

  getAllNotes(type : String){

  	this.notes.getAllNotes()
      .map((result) => result.filter( item => item.type === type ))  	
      .subscribe((data) => {
  		this.ratings = data;
  		if (this.ratings.length>0) {

  			for (let i = 0; i<this.ratings.length; i++) {
	  			this.id_cli_note = this.ratings[i].id_client;
	  			this.id_act_note = this.ratings[i].id_act;
	  			this.date_note.push(this.date.getDate(this.ratings[i].createdAt));
          this.getUserNote(this.id_cli_note);
		  		this.getActNote(this.id_act_note);
	  		}
      
  		}
  		console.log(data);
  	});
  }
    getUserNote(id : String){

  	this.auth.getAllClients().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.user_info_note.push(response);
	  	//console.log('user : ',this.user_info_note);
	  })

  }
  getActNote(id : String){
  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_note.push(response);
	  	//console.log('activite : ',this.act_note);
      

	  })

  }
  ngOnInit() {

  	this.getAllNotes(this.type_note);
  }


}
