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
	  },err =>{
      
    })

  }
 
  ngOnInit() {
    this.getUser();
  }

}
