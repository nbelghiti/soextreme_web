import { Injectable } from '@angular/core';
import { Title, Meta }     from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MetasService {

  constructor(private titleService: Title,
  			  private meta : Meta,
  			  private translate : TranslateService
 ) { }

  public setTitle( obj ) {
    this.translate.get(obj).subscribe((res:string) =>{
         
        this.titleService.setTitle( res );

    });
  }
  public setOtherMetas( obj ){
     var og_tag = new RegExp("^og");
  	 this.translate.get(obj).subscribe((res:string) =>{
         
       var tab = Object.keys(res);
       for (var i = 0; i < tab.length; i++) {
       	if (og_tag.test(tab[i])) {
          this.meta.updateTag({ property: tab[i], content: res[tab[i]] });

         } else {

           this.meta.updateTag({ name: tab[i], content: res[tab[i]] });
         }
       }
    });

  }

  
}
