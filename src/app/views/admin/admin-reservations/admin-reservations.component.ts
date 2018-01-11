import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Reservation, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,ReservationService, AuthService,DateService } from '../../../services/index';
@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.css']
})
export class AdminReservationsComponent implements OnInit {

  reservations : any = [];
  id_cli_rsv : any ;
  id_act_rsv : any;
  date_rsv : any = [];
  user_info_rsv : any = [];
  act_rsv : any = [];

  constructor(private reservation : ReservationService,
  			  private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private date : DateService,
              private auth : AuthService) { }

  getAllReservations(){

  	this.reservation.getAllReservations()
    //(item.statut === "reserve" || item.statut === "annule")
    .map((result) => result.filter( item => item.statut === "reserve" || item.statut === "annule" ))
  	.subscribe((data) => {
  		this.reservations = data;
  		if (this.reservations.length>0) {

  			for (let i = 0; i<this.reservations.length; i++) {
	  			this.id_cli_rsv = this.reservations[i].id_client;
	  			this.id_act_rsv = this.reservations[i].id_act;
	  			this.date_rsv.push(this.date.getDate(this.reservations[i].date_rsv));
          this.getUserRsv(this.id_cli_rsv);
		  		this.getActRsv(this.id_act_rsv);
	  		}
      
  		}
  		console.log(data);
  	});
  }
    getUserRsv(id : String){

  	this.auth.getAllClients().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.user_info_rsv.push(response);
	  	//console.log('user : ',this.user_info_rsv);
	  })

  }
  getActRsv(id : String){
  	this.activite.getAllActivites().map((result) => result.filter( item => item._id === id ))
	  .subscribe((response)=>{
	  	this.act_rsv.push(response);
	  	//console.log('activite : ',this.act_rsv);
      

	  })

  }
  ngOnInit() {

  	this.getAllReservations();
  }

}
