import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Activites } from '../../../models/index';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  form: FormGroup;
  showHome :boolean = false;
  showAct : boolean = false;
  act : any ={
               libelle: ['',[Validators.required, Validators.minLength(3)]],
               type_act:['',[Validators.required, Validators.minLength(3)]],
               prix:['',[Validators.required, Validators.minLength(3)]],
               description:['',[Validators.required, Validators.minLength(3)]],
               condition:['',[Validators.minLength(3)]],
               visible: this.showAct, 
               en_promo:false,
               photo:null,  
               remise: null,
               longitude:0, 
               latitude:0,        
               visible_home: this.showHome,
               duree_act:['',[Validators.required, Validators.maxLength(2)]],
               _id:null
          } ;


  constructor(private route : ActivatedRoute,
  			  private router : Router,
  			  private activite :ActivitesService,
  			  public fb: FormBuilder) { 

  			  this.form = fb.group(this.act);

  }
  createActivite(){

     this.activite.createActivite(this.form.value).subscribe(data => {
		
     	let libelle = this.form.get('libelle').value,
     		type_act 	= this.form.get('type_act').value,
     		duree_act	= this.form.get('duree_act').value;
     	
     	console.log(data);

     });

  }
  isChecked(e){

    this.showHome = e.target.checked;
    console.log(this.showHome);

  }

  onSubmit(){

  	this.createActivite();

  }
  ngOnInit() {



  }

}
