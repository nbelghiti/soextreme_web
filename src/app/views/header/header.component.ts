import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoaderPageService } from '../../services/index';
import { MetasService } from '../../services/index';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

    cart_items: any;

    constructor(private loader: LoaderPageService, private location: Location, private meta: MetasService) {




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



    ngOnInit() {
        this.getCartItems();

        this.meta.setTitle('metas.accueil.title');
        this.meta.setOtherMetas('metas.accueil.other');


    }

}