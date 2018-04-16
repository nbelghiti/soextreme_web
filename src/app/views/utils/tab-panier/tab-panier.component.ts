import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import { Activites, Reservation } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,AuthService,ReservationService,CartService, SessionsService } from '../../../services/index';

@Component({
    selector: 'app-tab-panier',
    templateUrl: './tab-panier.component.html',
    styleUrls: ['./tab-panier.component.css'],
    providers: [Reservation]

})
export class TabPanierComponent implements OnInit {
    @Output() retrieveTotal: EventEmitter < number > = new EventEmitter < number > ();
    @Output() retrievePanier: EventEmitter < Reservation > = new EventEmitter < Reservation > ();

    id_client = null;
    locale = JSON.parse(localStorage.getItem("langue"));
    id_act: any;
    act: any = [];
    rsv: any;
    session = myGlobals.CURRENT_SESSION._id;
    test: any;
    total: number = 0;
    id_rsv: any;
    display: boolean = true;
    currency = myGlobals.CURRENCY.euro;
    panier : Reservation;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private activite: ActivitesService,
        private reservation: ReservationService,
        private location: Location,
        public _rsv: Reservation,
        private auth: AuthService,
        private sess : SessionsService) {}

    getAllReservationsByClient(session) {

        this.reservation.getAllReservations()
            .map((result) => result.filter(item => item.session === session && item.statut === "non-reserve"))
            .subscribe((response) => {

                //this.rsv = response;
              
                this.getResponse(response);

            }, err => {

            });

    }
    getResponse(res){
        this.rsv = res;
        if (this.location.path() == '/mon-panier') {
            
              if (this.rsv.length > 0) {
                    for (let i = 0; i < this.rsv.length; i++) {
                        this.getActivitesByClient(this.rsv[i].id_act);
                        //this.deleteRsv(this.rsv[i]._id);
                    }
                } else {}
        } else {
            this.id_client = JSON.parse(localStorage.getItem('currentUser'))._id;
            for (var i = 0; i< this.rsv.length ;i++) {    
                   this.getActivitesByClient(this.rsv[i].id_act);
                if (this.rsv[i].id_cli === null || this.rsv[i].id_cli === '') {
                   this.panier  = {
                    id_cli : this.id_client,
                      id_act : this.rsv[i].id_act,
                     heure_in  : this.rsv[i].heure_in,
                     heure_out  :this.rsv[i].heure_out,
                      date_rsv : this.rsv[i].date_rsv,
                      _id :this.rsv[i]._id,
                     statut:'non-reserve',
                     session: this.rsv[i].session,
                     nb_pers: this.rsv[i].nb_pers
                };
                  this.updateRsv(this.panier);
              }
          }
          this.retrievePanier.emit(this.rsv);
        }

    }
    isDisplay() {
        if (this.location.path() === '/loginOrder') {
            this.display = false;
        } else {
            this.display = true;
        }
    }
    deleteRsv(id) {
        this.reservation.deleteReservation(id).subscribe(data => {
        }, err => {

        });
        this.sess.removeCartItem();
        setTimeout(() => {
            
            location.reload();
        }, 3000);
    }
    getTotal(datarray) {
        this.total = 0;
        if (datarray.length > 0) {
            for (let i = 0; i < datarray.length; i++) {
                this.total += datarray[i].prix;
            }
        }

        return this.total;

    }
    getActivitesByClient(id: String) {

        this.activite.getActivite(id).subscribe(data => {
            this.act.push(data);
            this.getTotal(this.act);
            this.retrieveTotal.emit(this.total);
        }, err => {

        });

    }
    updateRsv(panier){

      this.reservation.updateReservation(panier).subscribe(data => {
         //data.id_cli = this.id_cli;

     });
    }
    
    ngOnInit() {

        this.getAllReservationsByClient(this.session);
        //this.getActivitesByClient(this.id_act);
        this.isDisplay();
    }

}