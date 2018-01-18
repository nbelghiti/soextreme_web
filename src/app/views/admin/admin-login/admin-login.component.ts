import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm,FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Gerant } from '../../../models/index';
import { GerantService } from '../../../services/index';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loading = false;
    returnUrl: string;
    form:FormGroup;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private gerantService: GerantService,
        public fb: FormBuilder) { 

          this.form = fb.group({
                email: ['',[Validators.required, Validators.minLength(3)]],
               password:['',[Validators.required, Validators.minLength(3)]],
              
            });

             }
 
    ngOnInit() {
         //this.gerantService.logout();
         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin/home';
    }
 
    login() {
        this.loading = true;
       this.gerantService.login(this.form.value)
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
