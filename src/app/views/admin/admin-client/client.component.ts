import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Activites,  Commentaires, User, Note } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService,NotesService } from '../../../services/index';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class AdminClientComponent implements OnInit {

  commentaires : Commentaires[] = [];
  client : any= [];
  id_client = this.route.snapshot.paramMap.get('id');
  id_act_com : any;
  date_com : any = [];
  date_note : any = [];
  user_info_com : any = [];
  act_com : any = [];
  act_note : any = [];
  ratings : any =[];
  type_note : String = "activite";


  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private notes : NotesService,
              private config: NgbRatingConfig,
              private commentaire : CommentairesService,
              private date : DateService,
              private auth : AuthService) { 


      config.readonly = true;
      config.max = myGlobals.RATING_ACT;


  }

  getClient(id : String){
  
  	this.auth.getAllClients()
  	.map((result) => result.filter( item => item._id === id ))
    .subscribe((data) => {
  		this.client = data[0];
  	//	console.log(data);
  	});

  }   
   getAllCommentsByClient(id : String){
  
  	this.commentaire.getAllCommentaires()
  	.map((result) => result.filter( item => item.id_client === id ))
    .subscribe((data) => {
  		this.commentaires = data;
  		if (this.commentaires.length>0) {
  			for (let i = 0; i<this.commentaires.length; i++) {
  				this.date_com.push(this.date.getFullDate(this.commentaires[i].date));
  				this.getActCom(this.commentaires[i].id_act);
  			}
	  		
  		}
 
  	});

  } 
    getAllNotesByClient(type : String, id_cli : String){

    this.notes.getAllNotes()
      .map((result) => result.filter( item => item.type === type && item.id_client === id_cli ))       
      .subscribe((data) => {
      this.ratings = data;
      if (this.ratings.length>0) {
        for (let i = 0; i<this.ratings.length; i++) {
          this.date_note.push(this.date.getDate(this.ratings[i].createdAt));
          this.getActNote(this.ratings[i].id_act);
        }
      
      }
      console.log(data);
    });
  }
  getActCom(id : String){
  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_com.push(response);
	  	//console.log('activite : ',this.act_com);
      

	  })

  }
  getActNote(id : String){
    this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
    .subscribe((response)=>{
      this.act_note.push(response);
      //console.log('activite : ',this.act_com);
      

    })

  }
  ngOnInit() {

  	this.getAllCommentsByClient(this.id_client);
  	this.getClient(this.id_client);
    this.getAllNotesByClient(this.type_note, this.id_client);
  }

}
