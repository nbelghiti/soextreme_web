import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { LoaderPageService } from '../../services/index';
import { MetasService, ActivitesService } from '../../services/index';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    cart_items: any;
    id_activite = this.route.snapshot.paramMap.get('id');
    description: any;
    libelle : String;

    constructor(private loader: LoaderPageService,
                private location: Location,
                private meta: MetasService,
                private route: ActivatedRoute,
                private myactivity: ActivitesService) {




    }
    onClick(url) { 
        this.loader.onClick(url);
    }

    isActive(path) {
        return this.location.path().indexOf(path) > -1;
    }
    getCartItems() {

        this.cart_items = localStorage.getItem("cartQty") || 0;

    }
 
    setDescriptionMetaActivity(){
        if(this.id_activite){
            
         this.myactivity.getActivite(this.id_activite).subscribe(data => {
            this.description = data.description;
            this.meta.setDescActivity(this.description);
           // console.log(this.description);

        });
        }
    }
    setTitlePage(){

        if(this.id_activite){

            this.setTitleActivity();

        } else {

            this.setTitle();

        }

    }
    setTitle(){

        this.meta.setTitle('metas.accueil.title');

    }
    setTitleActivity(){
          this.myactivity.getActivite(this.id_activite).subscribe(data => {
            this.libelle = data.libelle;
            this.meta.setTitleActivity(this.libelle);

           // console.log(this.description);

        });
    }

    ngOnInit() {
            this.getCartItems();
            this.setTitlePage();
            this.meta.setOtherMetas('metas.accueil.other');
            this.setDescriptionMetaActivity();
    }

}