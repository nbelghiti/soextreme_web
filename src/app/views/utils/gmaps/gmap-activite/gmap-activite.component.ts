import { Component, OnInit } from '@angular/core';
import { ActivitesService } from '../../../../services/index';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites} from '../../../../models/index';

@Component({
  selector: 'app-gmap-activite',
  templateUrl: './gmap-activite.component.html',
  styleUrls: ['./gmap-activite.component.css']
})
export class GmapActiviteComponent implements OnInit {
  //title: string = 'My first AGM project';
  position : any ={};

  constructor(private activite : ActivitesService,
  			      private route : ActivatedRoute,
              private router : Router) { }

   getPosition(){
		 let id_activite = this.route.snapshot.paramMap.get('id');
		 this.activite.getActivite(id_activite).subscribe(data => {
		 	this.position.lat= data.latitude  || 0;
		 	this.position.lon= data.longitude || 0;
		 //	console.log(this.position);

		 });

  }


  ngOnInit() {

  	this.getPosition();
  }

}
