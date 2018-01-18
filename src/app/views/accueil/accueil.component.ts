import { Component, OnInit } from '@angular/core';
import { MetasService } from '../../services/index';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


 constructor(private meta : MetasService ) {


  }

  ngOnInit(){  

  	this.meta.setTitle('metas.accueil.title');
  	this.meta.setOtherMetas('metas.accueil.other');
  }


}

