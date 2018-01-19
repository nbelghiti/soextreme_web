import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';

@Component({
    selector: 'app-recap-infos',
    templateUrl: './recap-infos.component.html',
    styleUrls: ['./recap-infos.component.css']
})
export class RecapInfosComponent implements OnInit {

    returnUrl: string;
    id_cli = '';
    client_info: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService) {


    }

    ngOnInit() {
        //this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';
        this.getClient();

    }


    getClient() {


        this.id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
        this.authService.getClient(this.id_cli).subscribe(res => {
            this.client_info = res;
        }, err => {

        })


    }


}