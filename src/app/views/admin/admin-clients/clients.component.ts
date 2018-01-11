import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  users_info : User[] = [];

  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private commentaire : CommentairesService,
              private date : DateService,
              private auth : AuthService) { }

  getUser(){

  	this.auth.getAllClients().subscribe((response)=>{
	  	this.users_info = response;
	  	console.log('user : ',this.users_info);
	  })

  }
 /* getActCom(id : String){
  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_com.push(response);
      

	  })

  }*/
 /* getAllComments(){
  
  	this.commentaire.getAllCommentaires()

    .subscribe((data) => {
  		this.commentaires = data;
  		if (this.commentaires.length>0) {

	  		for (let i = 0; i<this.commentaires.length; i++) {
	  			this.id_cli_com = this.commentaires[i].id_client;
	  			this.id_act_com = this.commentaires[i].id_act;
	  			this.date_com.push(this.date.getFullDate(this.commentaires[i].date));
          this.getUserInfoCom(this.id_cli_com);
		  		this.getActCom(this.id_act_com);
	  		}
        //console.log(this.commentaires);
  		}
  		//console.log(data);
  	});

  }*/
  ngOnInit() {
    this.getUser();
  //	this.getAllComments();
  }

}
