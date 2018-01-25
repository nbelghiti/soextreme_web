import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Amis } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { AmisService,AuthService} from '../../../services/index';

@Component({
  selector: 'app-amis',
  templateUrl: './amis.component.html',
  styleUrls: ['./amis.component.css']
})


export class AmisComponent implements OnInit {
  id_client = myGlobals.CURRENT_CLIENT._id;
  allfriends : any = [];
  clientsids : any = [];
  friendsids : any = [];
  clientslist : any = [];
  allClients : any = [];
   public model: any;


  constructor(private amis : AmisService, private auth : AuthService) {   	
  	this.getAllAmis();
  	this.getAllClients();
  }

  ngOnInit() {
  }
  getAllAmis(){
  	console.log(this.id_client);
  	this.amis.getAllAmisByClient(this.id_client).subscribe(data =>{ 

  		this.allfriends = data;
  		//this.friendslist.push(data);
  		for (var i = 0; i < data.length; i++) {
  			this.friendsids.push(data[i].id_client_invite);

  		}
  		console.log(this.friendsids);
  	}, err => {});
  }
   getAllClients(){
  	this.auth.getAllClients()
  	.map((result) => result.filter(item => item._id !== this.id_client && item._id !== this.friendsids[item._id] ))
  	.subscribe(data =>{ 
  		//console.log(data);
  		for (var i = 0; i < data.length; i++) {
  			this.clientslist.push(data[i].nom);
  			this.clientsids.push(data[i]._id);
  		}
  		console.log(this.clientsids);

  	}, err => {});
  }
 search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.clientslist.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  
  addAmis(){


  }
}
