import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Groupes } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { GroupesService,AuthService} from '../../../services/index';
@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.css']
})
export class GroupesComponent implements OnInit {

  id_client = myGlobals.CURRENT_CLIENT._id;
  allgroups : any = [];
   public model: any;


  constructor(private groupServ : GroupesService, private auth : AuthService) {   	
  
  }

  ngOnInit() {

  	this.getAllGroups();
  }
  getAllGroups(){
  	this.groupServ.getAllGroupesByClient(this.id_client).subscribe(data =>{ 

  		this.allgroups = data;
  		console.log(data);
  
  });

}
}