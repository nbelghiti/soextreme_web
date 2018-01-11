import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';

@Component({
  selector: 'app-admin-commentaire',
  templateUrl: './admin-commentaire.component.html',
  styleUrls: ['./admin-commentaire.component.css']
})
export class AdminCommentaireComponent implements OnInit {
  commentaires : Commentaires[] = [];
  comment : any = [];
  id_cli_com : any ;
  id_act_com : any;
  date_com : any = [];
  user_info_com : any = [];
  act_com : any = [];
  id_com = this.route.snapshot.paramMap.get('id');

  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private commentaire : CommentairesService,
              private date : DateService,
              private auth : AuthService) { }
  getComment(id : String){
  
  	this.commentaire.getAllCommentaires()
  	.map((result) => result.filter( item => item._id === id ))
    .subscribe((data) => {
  		this.commentaires = data;
  		if (this.commentaires.length>0) {
	        this.comment = data[0];
	        this.date_com.push(this.date.getFullDate(this.comment.date));
	        this.id_act_com = this.comment.id_act;
	        this.id_cli_com = this.comment.id_client;
	        this.getActCom(this.id_act_com);
	        this.getUserInfoCom(this.id_cli_com);
  		}
  		console.log(data);
  	});

  }
   getActCom(id : String){
    this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
    .subscribe((response)=>{
      this.act_com.push(response[0]);
    //  console.log('activite : ',this.act_com);
      

    })

  }
  getUserInfoCom(id : String){

    this.auth.getAllClients().map((result) => result.filter( item => item._id === id ))
    .subscribe((response)=>{
      this.user_info_com.push(response[0]);
     // console.log('user : ',this.user_info_com);
    })

  }
  ngOnInit() {

  	this.getComment(this.id_com);
  }

}
