import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm,FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { UserService } from '../services/user-service/user.service';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    form:FormGroup;
    create_user_form:FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public fb: FormBuilder) { 

          this.form = fb.group({
                email: ['',[Validators.required, Validators.minLength(3)]],
               password:['',[Validators.required, Validators.minLength(3)]],
              
            });
         /* this.create_user_form = fb.group({
             nom: ['',[Validators.required, Validators.minLength(3)]],
               prenom:['',[Validators.required, Validators.minLength(3)]],
                email: ['',[Validators.required, Validators.minLength(3)]],
               password:['',[Validators.required, Validators.minLength(3)]],
               confirm_password:['',[Validators.required, Validators.minLength(3)]]
              
            });*/

             }
 
    ngOnInit() {
         //this.authService.logout();
         console.log('return url',this.route.snapshot.queryParams['returnUrl']);
         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';

    }
 
    login() {
       this.authService.login(this.form.value)
            .subscribe(
                data => {
                  let email     = this.form.get('email').value,
                      password  = this.form.get('password').value;
                      //console.log(data);
                      this.router.navigate([this.returnUrl]);
                          location.reload();

                      //console.log(this.returnUrl);

                },
                error => {
                    //this.alertService.error(error);
                });
    }
    /*createAccount() {
       this.authService.createClient(this.create_user_form.value)
            .subscribe(
                data => {
                      

                      console.log(data);
                      this.router.navigate([this.returnUrl]);
                      location.reload();

                      //console.log(this.returnUrl);

                },
                error => {
                    
                });
    }*/
}
