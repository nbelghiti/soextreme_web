import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Activites } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-admin-promotions',
  templateUrl: './admin-promotions.component.html',
  styleUrls: ['./admin-promotions.component.css']
})
export class AdminPromotionsComponent implements OnInit {
  myActivities : any;
  act_selected : any;
  currentPrice : Number;
  id_act : any;
  currentDiscount : Number;
  isPromo : boolean;
  currency = myGlobals.CURRENCY.euro;
  updateAct : Activites;
  constructor(private router: Router,
  			  private activites :ActivitesService,
  			  private route : ActivatedRoute){ }


  getActivite(){

  	 this.activites.getAllActivites()
  	 .subscribe(data => {

       this.myActivities=data;
       console.log(this.myActivities);
       

     });

  }
  selectActivity(e){

  	let index = e.target.selectedIndex;
  	this.currentPrice = this.myActivities[index].prix;
  	this.currentDiscount = this.myActivities[index].remise;
  	this.isPromo = this.myActivities[index].en_promo;
  	this.id_act = this.myActivities[index]._id;
  	this.updateAct = this.myActivities[index];


  }
 	
  updatePromo(){
  	this.activites.updateActivite(this.updateAct).subscribe(data => {

	  		console.log(data);
	});
  }
  onSubmit(){

  	this.updateAct.en_promo = this.isPromo;
  	this.updateAct.remise = this.currentDiscount;
  	if (this.updateAct.en_promo === false) {
  		this.updateAct.remise = null;
  	 	this.updatePromo();
  	}
  	else if (this.updateAct.remise<this.updateAct.prix && this.updateAct.remise>0) {
	  	
	  	this.updatePromo();

  	} else {


  	}

  }
  ngOnInit() {
  	this.getActivite();
  }

}
