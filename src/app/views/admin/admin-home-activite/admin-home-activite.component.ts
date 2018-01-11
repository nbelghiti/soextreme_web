import { Component, OnInit } from '@angular/core';
import { Activites } from '../../../models/index';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import * as myGlobals from '../../../globals/index';
import { ActivitesService, NotesService } from '../../../services/index';

@Component({
  selector: 'app-admin-home-activite',
  templateUrl: './admin-home-activite.component.html',
  styleUrls: ['./admin-home-activite.component.css']
})
export class AdminHomeActiviteComponent implements OnInit {


  myActivities: any =[];
  myActivity  : any =[];
  ratings : any = [];
  allaverages : any =[];
  sum : number = 0;
  average : number = 0;
  prices : any = [];
  currency  = myGlobals.CURRENCY.euro;

  constructor(private router: Router,
  			  private activites :ActivitesService,
          private notes : NotesService,
          private config: NgbRatingConfig,
  			  private route : ActivatedRoute,
  			  private activite :ActivitesService) {

      config.readonly = true;
      config.max = myGlobals.RATING_ACT;


  }
  
  getActivites(){

  	 this.activites.getAllActivites().subscribe(data => {

       this.myActivities=data;
       //console.log(this.myActivities);
       for (let i = 0; i <this.myActivities.length; i++) {
         this.getAverageByActivity(this.myActivities[i]._id);
         this.prices.push(this.activites.getPrice(this.myActivities[i].prix,this.myActivities[i].remise));
       }

     });

  }
  getAverageByActivity(id_act : String){
     this.notes.getAllNotes()
     .map((result) => result.filter( item => item.id_act === id_act ))
     .subscribe(data => {
       this.ratings = data;
       if(this.ratings.length>0){

         for (let i = 0; i < this.ratings.length; i++) {
           this.sum += this.ratings[i].note;
         }
         console.log(this.sum);   
         this.average = this.sum / this.ratings.length;
         this.average = Math.round(this.average);

       } else {

         this.average = 0;
       }
       this.allaverages.push(this.average);
       console.log(this.allaverages);
     });
  }

  deleteActivite(){

  	// let id_activite = this.route.snapshot.paramMap.get('id');
    // this.activite.deleteActivite(id_activite).subscribe(data => {this.myActivity=data ;console.log(this.myActivity);});
    console.log('delete');
  }
  
  ngOnInit() {

   this.getActivites();
  }



}
