import { NgModule } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule,TranslateLoader,TranslateService,MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MissingTranslation} from '../views/utils/missing-translation/missing-translation';
import { appRoutes } from '../app-routing/app-routing.module';
import { BrowserModule } from "@angular/platform-browser";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
/*export function LocalizeFactory(translate, location, settings, http)  {
    return new LocalizeRouterHttpLoader(translate, location, settings, http);
}*/

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MissingTranslation}
        }),
  ],
  declarations: [],
  exports:[
  CommonModule, 
  HttpClientModule,
  TranslateModule,
  //LocalizeRouterModule
  ]
})
export class SharedModule { }
/*

, {
      parser: {
        provide: LocalizeParser,
        useFactory: LocalizeFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    }
 */