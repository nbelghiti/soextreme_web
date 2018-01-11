import { Injectable } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

@Injectable()
export class LoaderPageService {

  constructor(private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,
               private router: Router) { }

   onClick(url){

   	   this.ng4LoadingSpinnerService.show();
	   setTimeout(() => {
	    this.ng4LoadingSpinnerService.hide();
	    this.router.navigate(['/'+url+'']);
	    }, 2000);
    }
}
