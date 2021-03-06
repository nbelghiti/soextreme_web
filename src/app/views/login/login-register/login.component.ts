import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm,FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { UserService } from '../services/user-service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    form: FormGroup;
    create_user_form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private translate: TranslateService,
        private router: Router,
        private authService: AuthService,
        public fb: FormBuilder) {

        this.form = fb.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]],

        });
        

    }

    ngOnInit() {
        //this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';
    }

    login() {
        this.authService.login(this.form.value)
            .subscribe(
                data => {
                    let email = this.form.get('email').value,
                        password = this.form.get('password').value;
                    this.router.navigate([this.returnUrl]);
                    location.reload();


                },
                err => {
                    this.translate.get("forms.form_invalid").subscribe((res: String) => {
                        alert(res);

                    }, err => {

                    });
                });
    }

}