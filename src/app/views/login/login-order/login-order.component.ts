import { Component, OnInit,AfterViewChecked, Input} from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';
import { UserService, ReservationService, ActivitesService } from '../../../services/index';
import { Reservation } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
declare let paypal: any;

@Component({
  selector: 'app-login-order',
  templateUrl: './login-order.component.html',
  styleUrls: ['./login-order.component.css']
})

export class LoginOrderComponent implements AfterViewChecked {

  rsv : any;
  session  = JSON.parse(localStorage.getItem('currentSession'))._id;
  id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
  panier : Reservation;
  act:any = [];
public didPaypalScriptLoad: boolean = false;
  public loading: boolean = true;
  public paymentAmount: number = 0;    
  constructor( private user : UserService,
               private activite : ActivitesService, 
               private reservation : ReservationService) { }
  retrieveTotal(total){
    console.log(total);
    this.paymentAmount = total;
    return total;
  }

  public paypalConfig: any = {
    env: 'sandbox',
    client: {
      sandbox: 'AWlMGZwpQbS0dq_r2Dt0ejp1TxDm72JD7Pt4Uc2mYlihAE3FU5axxS9wr4HcnVc13gB7TcbYDVLp9Vne',
      production: 'xxxxxxxxxx'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.paymentAmount, currency: 'EUR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // show success page
      });
    }
  };
 
   
/*** PAYPAL ******/


  public ngAfterViewChecked(): void {
    if(!this.didPaypalScriptLoad) {
      this.loadPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
        this.loading = false;
      });
    }
  }

  public loadPaypalScript(): Promise<any> {
    this.didPaypalScriptLoad = true;      

    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
  
}

