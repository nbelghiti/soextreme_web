import { Component, OnInit } from '@angular/core';
import { UserService, ReservationService } from '../../../services/index';
import { Reservation } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-login-order',
  templateUrl: './login-order.component.html',
  styleUrls: ['./login-order.component.css']
})
export class LoginOrderComponent implements OnInit {
	rsv : any;
	session  = JSON.parse(localStorage.getItem('currentSession'))._id;
	id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
	panier : Reservation;

  constructor( private user : UserService, private reservation : ReservationService) { }

   getAllReservationsByClient(session){

	  this.reservation.getAllReservations()
	  .map((result) => result.filter( item => item.session === session && item.statut === "non-reserve" ))
	  .subscribe((response)=>{

	  	this.rsv = response;

	  	for (var i = 0; i< this.rsv.length ;i++) {	
	  	  	if (this.rsv[i].id_cli === null || this.rsv[i].id_cli === '') {

		  		 this.panier  = {
					id_cli : this.id_cli,
	      			id_act : this.rsv[i].id_act,
	     			heure_in  : this.rsv[i].heure_in,
	     			heure_out  :this.rsv[i].heure_out,
	      			date_rsv : this.rsv[i].date_rsv,
	      			_id :this.rsv[i]._id,
	     			statut:'non-reserve',
	     			session: this.rsv[i].session
				};
				console.log('Article n°'+(i+1),this.panier);
		  		this.updateRsv(this.panier);
		  	}
		}
		console.log(this.rsv);
		  	
		  

	  	

	  });

  }
  updateRsv(panier){

  	this.reservation.updateReservation(panier).subscribe(data => {
     	//data.id_cli = this.id_cli;
       console.log(data);

     });
  }

  ngOnInit() {
  	  	this.getAllReservationsByClient(this.session);

  }

}
