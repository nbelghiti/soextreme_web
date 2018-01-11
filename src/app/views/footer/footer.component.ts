import { Component, OnInit } from '@angular/core';
import { LoaderPageService } from '../../services/index'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private loader : LoaderPageService) { }

  onClick(url){

   this.loader.onClick(url);
 }
  ngOnInit() {
  }

}
