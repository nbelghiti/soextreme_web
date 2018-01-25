import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Reservation, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,ReservationService, AuthService,DateService } from '../../../services/index';

@Component({
    selector: 'app-admin-reservation',
    templateUrl: './admin-reservation.component.html',
    styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationComponent implements OnInit {

    reservations: Reservation[] = [];
    rsv: any = [];
    id_cli_rsv: any;
    id_act_rsv: any;
    date_rsv: any = [];
    user_info_rsv: any = [];
    act_rsv: any = [];
    id_com = this.route.snapshot.paramMap.get('id');

    constructor(private route: ActivatedRoute,
        private router: Router,
        private activite: ActivitesService,
        private reservation: ReservationService,
        private date: DateService,
        private auth: AuthService) {}

    getReservation() {
   // getReservation(id: String) {

        //this.reservation.getAllReservations()
           // .map((result) => result.filter(item => item._id === id && item.statut === "reserve"))
         this.reservation.getReservation(this.id_com)
            //.map((result) => result.filter(item =>  item.statut !== "non-reserve" && item.statut !== null && item.statut !==""))
            .subscribe((data) => {
                this.reservations = data;
                console.log(data);
                console.log(this.id_com);

                if (this.reservations.length > 0) {
                    this.rsv = data[0];
                    this.date_rsv.push(this.date.getDate(this.rsv.date_rsv));
                    this.id_act_rsv = this.rsv.id_act;
                    this.id_cli_rsv = this.rsv.id_client;
                    this.getActRsv(this.id_act_rsv);
                    this.getUserInfoRsv(this.id_cli_rsv);
                }
            }, err => {


            });

    }
    getActRsv(id: String) {
        this.activite.getAllActivites().map((result) => result.filter(item => item._id === id))
            .subscribe((response) => {
                this.act_rsv.push(response[0]);


            }, err => {


            })

    }
    getUserInfoRsv(id: String) {

        this.auth.getAllClients().map((result) => result.filter(item => item._id === id))
            .subscribe((response) => {
                this.user_info_rsv.push(response[0]);
            }, err => {


            })

    }
    ngOnInit() {

        this.getReservation();
    }

}