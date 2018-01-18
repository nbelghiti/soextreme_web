import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm,FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
//import { UserService } from '../services/user-service/user.service';
import {Location} from '@angular/common';
import { User } from '../../../models/index';
import { AuthService } from '../../../services/index';
@Component({
  selector: 'app-info-compte',
  templateUrl: './info-compte.component.html',
  styleUrls: ['./info-compte.component.css']
})
export class InfoCompteComponent implements OnInit {

  



    returnUrl: string;
    form:FormGroup;
    create_user_form:FormGroup;
    hideInfo : boolean = false;
    id_cli = '';
    client_info : User;
    update_values : User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public fb: FormBuilder) { 
          this.create_user_form = fb.group({
             nom: ['',[Validators.required, Validators.minLength(3)]],
               prenom:['',[Validators.required, Validators.minLength(3)]],
                email: ['',[Validators.required, Validators.minLength(3)]],
               password:['',[Validators.required, Validators.minLength(3)]],
               confirm_password:['',[Validators.required, Validators.minLength(3)]]
              
            });

             }
 
    ngOnInit() {
         //this.authService.logout();
         console.log('return url',this.route.snapshot.queryParams['returnUrl']);
         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'loginOrder';
         this.hideField();
         this.getClient();

    }
    hideField(){

    	if (this.getLocation()) {
    		this.hideInfo = true;
    	} else {
    		this.hideInfo = false;
    	}
    	console.log(this.hideInfo);
    }
    getLocation(){

    	return location.pathname === '/mes-informations';
    }
    onSubmit(){

    	if (this.getLocation()) {
    		this.updateAccount();
    	} else {
    		this.createAccount();
    	}
    }
   getClient(){

   	if (this.getLocation()) {

   		   	this.id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
			this.authService.getClient(this.id_cli).subscribe(res =>{
			   		//console.log(res);
			   		this.client_info = res;
			})
   	}

   	
   }
   updateAccount() {   		   

   		this.create_user_form = this.fb.group({
             nom: [this.create_user_form.get('nom').value,[Validators.required, Validators.minLength(3)]],
             prenom:[this.create_user_form.get('prenom').value,[Validators.required, Validators.minLength(3)]],
             email: [this.client_info.email,[Validators.required, Validators.minLength(3)]],
             password:[this.create_user_form.get('password').value,[Validators.required, Validators.minLength(3)]],
             confirm_password:[this.create_user_form.get('confirm_password').value,[Validators.required, Validators.minLength(3)]],
             _id: this.id_cli
        });

   		 this.client_info.nom = this.create_user_form.get('nom').value;
   		 this.client_info.prenom = this.create_user_form.get('prenom').value;
   		 this.client_info.password = this.create_user_form.get('password').value;
   		 this.client_info.confirm_password = this.create_user_form.get('confirm_password').value;

   		 this.authService.updateClient(this.client_info)
            .subscribe(
                data => {
                      

                      console.log(data);
                      
                },
                error => {
                    
                });
   		 
       
    }
    createAccount() {
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
    }
}



