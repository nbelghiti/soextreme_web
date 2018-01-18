import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import { Activites, Reservation } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,AuthService,ReservationService,CartService } from '../../../services/index';

@Component({
  selector: 'app-tab-panier',
  templateUrl: './tab-panier.component.html',
  styleUrls: ['./tab-panier.component.css'],
  providers: [Reservation] 

})
export class TabPanierComponent implements OnInit {
@Output() retrieveTotal : EventEmitter<number> = new EventEmitter<number>();  

 // id_client = myGlobals.CURRENT_CLIENT._id;
  locale = JSON.parse(localStorage.getItem("langue"));
  id_act : any;
  act:any = [];
  rsv :any;
  session  = myGlobals.CURRENT_SESSION._id;
  test:any;
  total:number = 0;
  id_rsv : any;
  display : boolean = true;
  currency = myGlobals.CURRENCY.euro;
  constructor(private route : ActivatedRoute,
              private router : Router,
              private activite : ActivitesService,
              private reservation : ReservationService,
              private location: Location,
              public _rsv : Reservation,
              private auth : AuthService) { }

  getAllReservationsByClient(session){

	  this.reservation.getAllReservations()
	  .map((result) => result.filter( item => item.session === session && item.statut === "non-reserve" ))
	  .subscribe((response)=>{

	  	this.rsv = response;
	  	console.log(this.rsv);
	  	//console.log(response.length);
		if (this.rsv.length>0) {
			for(let i=0; i<response.length; i++){
				this.getActivitesByClient(this.rsv[i].id_act);
				//this.deleteRsv(this.rsv[i]._id);
				//this.total += +this.rsv[i].prix;
				//console.log('toto '+this.test);
	  		}
	  	} else{ 	}
	  


	  });

  }
  isDisplay(){
    console.log(this.locale);
    if (this.location.path() === '/loginOrder') {
     this.display = false;
    } else {
      this.display = true;
    }
  }
  deleteRsv(id){
  	this.reservation.deleteReservation(id).subscribe(data => { console.log(data)});
  }
  getTotal(datarray){
  	this.total = 0;
  	if(datarray.length>0){
	  	for(let i=0; i<datarray.length; i++){
	  	 		this.total += datarray[i].prix;
		}  	 	
		console.log(this.total);
  	}

	return this.total;

  }
  getActivitesByClient(id : String){

  	 this.activite.getActivite(id).subscribe(data => { 
  	 	this.act.push(data);
  	 	this.getTotal(this.act);
  	 	
  	 	 //console.log(this.act);
        this.retrieveTotal.emit(this.total);
  	 });

  }
  onSubmit(){
  //	this.deleteRsv(this._rsv.RsvId());
  }
  ngOnInit() {

  	this.getAllReservationsByClient(this.session);
  	//this.getActivitesByClient(this.id_act);
    this.isDisplay();
  }

}

