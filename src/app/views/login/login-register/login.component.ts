import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { UserService } from '../services/user-service/user.service';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';

import {NgForm,FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    returnUrl: string;
    form:FormGroup;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public fb: FormBuilder) { 

          this.form = fb.group({
                email: ['',[Validators.required, Validators.minLength(3)]],
               password:['',[Validators.required, Validators.minLength(3)]],
              
            });

             }
 
    ngOnInit() {
         //this.authService.logout();
         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';
    }
 
    login() {
        this.loading = true;
       this.authService.login(this.form.value)
            .subscribe(
                data => {
                  let email     = this.form.get('email').value,
                      password  = this.form.get('password').value;
                      //console.log(data);
                      this.router.navigate([this.returnUrl]);
                      //console.log(this.returnUrl);

                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });
    }
}
