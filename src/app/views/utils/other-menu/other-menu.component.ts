import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivitesService, LoaderPageService } from '../../../services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-other-menu',
  templateUrl: './other-menu.component.html',
  styleUrls: ['./other-menu.component.css'],
  providers: [NgbDropdownConfig]
})
export class OtherMenuComponent implements OnInit {

	types : any =  [];
	sorted_types : any =  [];
  constructor(private activites : ActivitesService,
  			config: NgbDropdownConfig,
        private router: Router,
        private loader: LoaderPageService,
        private location : Location) {
        // customize default values of dropdowns used by this component tree
        config.placement = 'top-right';
        config.autoClose = true;

    }

  ngOnInit() {

  	this.getType();
  }
  getType(){

  	this.activites.getAllActivites().map((result) => result.filter(item => item.type_act)).subscribe(data => {
  		for (var i = 0; i < data.length; i++) {
  			this.types.push(data[i].type_act.toLowerCase());
  			this.sorted_types = this.types.filter((el, i, a) => i === a.indexOf(el))
  		}
  		//console.log(this.sorted_types);
  	})
  }
    onClick(url) {
        this.router.navigate([url]);        
        setTimeout(() => {

          location.reload();
        }, 500);
    }



}
