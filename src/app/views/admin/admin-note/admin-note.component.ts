import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Activites,  Reservation, Note } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,NotesService, AuthService,DateService } from '../../../services/index';
@Component({
  selector: 'app-admin-note',
  templateUrl: './admin-note.component.html',
  styleUrls: ['./admin-note.component.css']
})
export class AdminNoteComponent implements OnInit {

 
  rating : any = [];
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
  getNote(type : String){
  
  	this.notes.getAllNotes()
    .map((result) => result.filter( item => item.type === type ))  	
    .subscribe((data) => {
  		this.rating = data;
  		if (this.rating.length>0) {
        this.rating = data[0];
        this.date_note.push(this.date.getDate(this.rating.createdAt));
        this.id_act_note = this.rating.id_act;
        this.id_cli_note = this.rating.id_client;
        this.getActRsv(this.id_act_note);
        this.getUserInfoRsv(this.id_cli_note);
  		}
  		console.log(data);
  	});

  }
   getActRsv(id : String){
    this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
    .subscribe((response)=>{
      this.act_note.push(response[0]);
    //  console.log('activite : ',this.act_note);
      

    })

  }
  getUserInfoRsv(id : String){

    this.auth.getAllClients().map((result) => result.filter( item => item._id === id ))
    .subscribe((response)=>{
      this.user_info_note.push(response[0]);
     // console.log('user : ',this.user_info_note);
    })

  }
  ngOnInit() {

  	this.getNote(this.type_note);
  }

}
