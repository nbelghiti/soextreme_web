import { NgModule } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule,TranslateLoader,TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appRoutes } from '../app-routing/app-routing.module';
import { BrowserModule } from "@angular/platform-browser";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
  ],
  declarations: [],
  exports:[
  CommonModule, 
  HttpClientModule,
  TranslateModule
  ]
})
export class SharedModule { }
