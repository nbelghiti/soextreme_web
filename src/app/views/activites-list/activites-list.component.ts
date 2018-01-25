import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location} from '@angular/common';
import { Activites } from '../../models/index';
import { ActivitesService, LoaderPageService } from '../../services/index';

@Component({
    selector: 'app-activites-list',
    templateUrl: './activites-list.component.html',
    styleUrls: ['./activites-list.component.css']
})
export class ActivitesListComponent implements OnInit {

    myActivities: any = [];
    activity_list;
    constructor(private router: Router, private activites: ActivitesService, private loader : LoaderPageService) {}

    getActivites() {

        this.activity_list = this.activites.getAllActivites();

        if (location.pathname == '/') {

           // this.activity_list.map((result) => result.filter(item => item.visible === true && item.visible_home === true))
               this.activity_list
                .subscribe(data => {
                    this.myActivities = data;
                }, err => {});


        } else if (location.pathname == '/activites') {

          //  this.activity_list.map((result) => result.filter(item => item.visible === true))
               this.activity_list
                .subscribe(data => {
                    this.myActivities = data;
                }, err => {});

        }

    }

    onClick(url){

        this.loader.onClick(url)
    }

    ngOnInit() {

        this.getActivites();
    }

}