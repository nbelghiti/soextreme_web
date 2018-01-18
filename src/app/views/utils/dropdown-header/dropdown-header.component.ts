import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, LoaderPageService} from '../../../services/index';
import  * as myGlobals from '../../../globals/index';

@Component({
  selector: 'app-dropdown-header',
  templateUrl: './dropdown-header.component.html',
  styleUrls: ['./dropdown-header.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownHeaderComponent implements OnInit {
 userConnected = myGlobals.CURRENT_CLIENT;
   isLoggedIn = this.authService.isLoggedIn();

 constructor(config: NgbDropdownConfig,
             private authService: AuthService,
             private router : Router,
             private loader : LoaderPageService) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-right';
    config.autoClose = true;

  }
  onClick(url){

    this.loader.onClick(url);
  }

  ngOnInit() {
  }

  logout(){

    this.authService.logout();
    this.router.navigate(['/']);
    location.reload();

  }
}
