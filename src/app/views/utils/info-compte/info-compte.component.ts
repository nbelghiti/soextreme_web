import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm,FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
//import { UserService } from '../services/user-service/user.service';
import {Location} from '@angular/common';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';
import {ReCaptchaDirective} from '../../../directives/captcha-directive/captcha.directive';
function passwordMatchValidator(g: FormGroup) {
   return g.get('password').value === g.get('confirm_password').value
      ? null : {'mismatch': true};
}
function getWindow (): any {
    return window;
}

@Component({
    selector: 'app-info-compte',
    templateUrl: './info-compte.component.html',
    styleUrls: ['./info-compte.component.css'],
    providers : [ReCaptchaDirective]
})
export class InfoCompteComponent implements OnInit {

    returnUrl: string;
    form: FormGroup;
    create_user_form: FormGroup;
    hideInfo: boolean = false;
    id_cli = '';
    client_info: User;
    update_values: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public fb: FormBuilder) {
        this.create_user_form = fb.group({
            nom: ['', [Validators.required, Validators.minLength(3)]],
            prenom: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.minLength(3)]],
            confirm_email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]],
            confirm_password: ['', [Validators.required, Validators.minLength(3)]],
            captcha: ['', [Validators.required]]

            // recaptchaReactive:  ['', [Validators.required]]

        });

    }
    verifyCallback(response){
    alert(response);
  }
    ngOnInit() {
        //this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';
        this.hideField();
        this.getClient();
    }
    hideField() {

        if (this.getLocation()) {
            this.hideInfo = true;
        } else {
            this.hideInfo = false;
        }
    }
  
    getLocation() {

        return location.pathname === '/mes-informations';
    }
    onSubmit() {
        console.log(this.create_user_form);
        if (this.getLocation()) {
            this.updateAccount();
        } else {
            this.createAccount();
        }
    }
    getClient() {

        if (this.getLocation()) {

            this.id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
            this.authService.getClient(this.id_cli).subscribe(res => {
                this.client_info = res;
            }, err => {

            })
        }


    }

   onCaptchaComplete(response: any) {
        console.log('reCAPTCHA response recieved:');
        console.log(response.success);
        console.log(response.token);
   }

    updateAccount() {

        this.create_user_form = this.fb.group({
            nom: [this.create_user_form.get('nom').value, [Validators.required, Validators.minLength(3)]],
            prenom: [this.create_user_form.get('prenom').value, [Validators.required, Validators.minLength(3)]],
            email: [this.client_info.email, [Validators.required, Validators.minLength(3)]],
            password: [this.create_user_form.get('password').value, [Validators.required, Validators.minLength(3)]],
            confirm_password: [this.create_user_form.get('confirm_password').value, [Validators.required, Validators.minLength(3)]],
            _id: this.id_cli
        });

        this.client_info.nom = this.create_user_form.get('nom').value;
        this.client_info.prenom = this.create_user_form.get('prenom').value;
        this.client_info.password = this.create_user_form.get('password').value;
        this.client_info.confirm_password = this.create_user_form.get('confirm_password').value;

        this.authService.updateClient(this.client_info)
            .subscribe(
                data => {

                },
                err => {

                });

    }
    createAccount() {
        this.authService.createClient(this.create_user_form.value)
            .subscribe(
                data => {

                    this.router.navigate([this.returnUrl]);
                    location.reload();

                },
                err => {

                });
    }
}