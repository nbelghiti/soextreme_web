import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import { Activites, Reservation } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { ActivitesService,AuthService,ReservationService } from '../../services/index';



@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  id_client = JSON.parse(localStorage.getItem('currentUser'))._id;
  locale = myGlobals.LANGUE;
  id_act : any;
  act:any = [];
  rsv :any;
  currency = myGlobals.CURRENCY.euro;
  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private reservation : ReservationService,
              private auth : AuthService) { }

  getAllReservationsByClient(id : String){

	  this.reservation.getAllReservations()
	  .map((result) => result.filter( item => item.id_cli === id  && item.statut === "reserve" ))
	  .subscribe((response)=>{

	  	this.rsv = response;
	  	//console.log(response.length);
		if (this.rsv.length>0) {
			for(let i=0; i<response.length; i++){
				this.getActivitesByClient(this.rsv[i].id_act);

	  		}
	  	} else{ 	}
	  


	  });

  }
  getActivitesByClient(id : String){

  	 this.activite.getActivite(id).subscribe(data => { this.act.push(data); console.log(this.act)});

  }
  ngOnInit() {

  	this.getAllReservationsByClient(this.id_client);
  	//this.getActivitesByClient(this.id_act);
  }

}
