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

    reservations : any = [];
    //rsv: any = [];
    id_cli_rsv: any;
    id_act_rsv: any;
    date_rsv: any = [];
    user_info_rsv: any = [];
    act_rsv: any = [];
    statut : any
    stat : any
    id_com = this.route.snapshot.paramMap.get('id');
    statuts = ["annule", "fait"];
    rsv : Reservation;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private activite: ActivitesService,
        private reservation: ReservationService,
        private date: DateService,
        private auth: AuthService) {
        console.log(this.id_com);
        this.getReservation(this.id_com);
    }

    getReservation(id) {
        this.reservation.getReservation(this.id_com)
            .subscribe((data) => {
                console.log(data);  
                    this.reservations = data; 
                    this.date_rsv.push(this.date.getDate(this.reservations.date_rsv));
                    this.id_act_rsv = this.reservations.id_act;
                    this.id_cli_rsv = this.reservations.id_cli;
                    this.statut = this.reservations.statut;

                    this.getActRsv(this.id_act_rsv);
                    this.getUserInfoRsv(this.id_cli_rsv);
           
            }, err => {
            });
    }
    getActRsv(id: String) {
        this.activite.getActivite(id)
            .subscribe((response) => {
                console.log(response)
                this.act_rsv=response;
            }, err => {

            })
    }
    changeStatut(){
        console.log(this.stat);
        this.rsv =   {
                    id_cli : this.reservations.id_cli,
                      id_act : this.reservations.id_act,
                     heure_in  : this.reservations.heure_in,
                     heure_out  :this.reservations.heure_out,
                      date_rsv : this.reservations.date_rsv,
                      _id :this.reservations._id,
                     statut: this.stat,
                     session: this.reservations.session,
                     nb_pers: this.reservations.nb_pers,
                     heure_creuse: this.reservations.heure_creuse
                };

        this.reservation.updateReservation(this.rsv).subscribe(data => {console.log(data)}, err => {

            console.log(err);
        });
    }

    getUserInfoRsv(id: String) {
        this.auth.getClient(id)
            .subscribe((response) => {
                console.log(response)
                this.user_info_rsv = response;
            }, err => {

            })

    }
    ngOnInit() {

    }

}