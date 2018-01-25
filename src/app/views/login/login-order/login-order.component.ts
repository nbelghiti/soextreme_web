import { Component, OnInit,AfterViewChecked, Input} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService, ReservationService, ActivitesService, LoaderPageService, AuthService } from '../../../services/index';
import { TranslateService } from '@ngx-translate/core';
import { Reservation } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
declare let paypal: any;
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmPopupComponent } from '../../../views/utils/index';

@Component({
    selector: 'app-login-order',
    templateUrl: './login-order.component.html',
    styleUrls: ['./login-order.component.css'],
    providers: [ConfirmPopupComponent,  NgbModal, NgbActiveModal]

})

export class LoginOrderComponent implements AfterViewChecked {

    rsv:  any = [];
    session = JSON.parse(localStorage.getItem('currentSession'))._id;
    id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
    panier: Reservation;
    act: any = [];
    public didPaypalScriptLoad: boolean = false;
   // public loading: boolean = true;
    public paymentAmount: number = 0;
    constructor(private user: UserService,
        private activite: ActivitesService,
        private reservation: ReservationService,
        private modalService: NgbModal,
        private translate: TranslateService,
        private router : Router,
        private loader : LoaderPageService,
        private auth : AuthService) {

        this.loader.load();
    }
    retrieveTotal(total) {
        this.paymentAmount = total;
        return total;
    }
    retrievePanier(panier) {
         for (var i = 0; i<panier.length; i++) {

            this.rsv.push(panier[i]);
         }

    }
   
    
    public updateStatut(){     
        for (var i = 0; i<this.rsv.length; i++) {
            this.rsv[i].statut = "en cours";
            this.reservation.updateReservation(this.rsv[i]).subscribe(data => {

             });
         } 
               
    }
    public resetPanier(){
        localStorage.removeItem('cartQty');
        localStorage.removeItem('currentSession');
        this.auth.logout();
    }


    public paypalConfig: any = {
        env: 'sandbox',
        client: {
            sandbox: myGlobals.PAYPAL_CLIENT_ID,
            production: 'xxxxxxxxxx'
            
        },
        commit: true,
        payment: (data, actions) => {
            return actions.payment.create({
                payment: {
                    transactions: [{
                        amount: {
                            total: this.paymentAmount,
                            currency: 'EUR'
                        }
                    }]
                }
            });
        },
        onAuthorize: (data, actions) => {
            return actions.payment.execute().then((payment) => {
                // show success page
                console.log(payment);
                    this.updateStatut();

                    this.openPopup();
                    setTimeout(() => {
                        this.resetPanier();
                        this.router.navigate(['/']);
                        location.reload();
                    }, 3000);
            });
        }
    };


    /*** PAYPAL ******/

    public openPopup(){

        const modalRef = this.modalService.open(ConfirmPopupComponent);
        var popup_info = ["details.reserv.popup.success.title",
            "details.reserv.popup.success.content",
            "details.reserv.popup.success.btclose"
        ];

        this.translate.get(popup_info).subscribe((res: String) => {
            modalRef.componentInstance.title = res[popup_info[0]];
            modalRef.componentInstance.content = res[popup_info[1]];
            modalRef.componentInstance.btClose = res[popup_info[2]];
        }, err => {

        });
    }
    public ngAfterViewChecked(): void {
        if (!this.didPaypalScriptLoad) {
            this.loadPaypalScript().then(() => {
                paypal.Button.render(this.paypalConfig, '#paypal-button');
            });
        }
    }

        public loadPaypalScript(): Promise < any > {
        this.didPaypalScriptLoad = true;

        return new Promise((resolve, reject) => {
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

}