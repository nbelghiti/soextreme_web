import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Activites } from '../../../models/activites';
import * as myGlobals from '../../../globals/index';
import { ActivitesService } from '../../../services/index';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.css']
})
export class UpdateActiviteComponent implements OnInit {

  form: FormGroup;
  myActivity : any =[];
 showHome :boolean = false;
  showAct : boolean = false;
  currency = myGlobals.CURRENCY.euro;


  constructor(private route : ActivatedRoute,
  			  private router : Router,
  			  private activite :ActivitesService,
  			  public fb: FormBuilder) { 
  			
  			 let id_activite = this.route.snapshot.paramMap.get('id');
  			 console.log(id_activite);

  			  this.form = fb.group({
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
               //duree_act:['',[Validators.required, Validators.maxLength(2)]],
               _id:null
        	  });
        	  //console.log(this.form);

  }
getActivite(){
     let id_activite = this.route.snapshot.paramMap.get('id');
     this.activite.getActivite(id_activite).subscribe(data => {

       this.myActivity=data ;

       console.log(this.myActivity);

     });

  }
  isChecked(e){

    this.showHome = e.target.checked;
    console.log(this.showHome);

  }

  onChangePromo(){
     if (this.myActivity.en_promo === false) {

      this.myActivity.remise = null; 
      this.form.get('remise').disable();

    } else  {
     
        this.form.get('remise').enable(); 

       
    }


  }
  onChangeVisible(){
     if (this.myActivity.visible_home === true) {

      this.form.get('visible').disable();
      this.myActivity.visible = true;

    } else  {
     
        this.form.get('visible').enable(); 

    }


  }
 updateActivite(){

      if (this.myActivity.remise<this.myActivity.prix && this.myActivity.remise>0) {
              
                this.myActivity.remise = this.form.get('remise').value;
                this.myActivity.en_promo = this.form.get('en_promo').value;

      } else {

              this.myActivity.remise = null;   
              this.myActivity.en_promo = false; 

      }
   
this.form = this.fb.group({
            libelle: this.form.get('libelle').value,
               type_act:this.form.get('type_act').value,
               prix:this.form.get('prix').value,
               description:this.form.get('description').value,
               condition:this.form.get('condition').value,
               visible:this.myActivity.visible, 
               en_promo:this.myActivity.en_promo,
               photo:this.myActivity.photo,  
               remise: this.myActivity.remise,
               longitude:this.myActivity.longitude, 
               latitude:this.myActivity.latitude,        
               visible_home: this.myActivity.visible_home,
               //duree_act:['',[Validators.required, Validators.maxLength(2)]],
               _id:this.myActivity._id
            });

          //console.log(this.form)

 	 	 
     this.activite.updateActivite(this.form.value).subscribe(data => {
     	
       console.log(data);

     });

  }

  onSubmit(){

  	this.updateActivite();

  }
  ngOnInit() {

  	 this.getActivite();


  }

}

