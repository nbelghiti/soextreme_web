import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { LANGUE, GMAP_KEY, LOADER_SETTINGS } from '../globals/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4FilesModule } from 'angular4-files-upload';
import { CalendarModule } from 'angular-calendar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingModule  } from 'ngx-loading';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../app/shared/shared.module';

import { AProposComponent } from '../views/a-propos/index';
import { AccueilComponent } from '../views/accueil/index';
import { ActivitesComponent } from '../views/activites/index';
import { PageNotFoundComponent } from '../views/page-not-found/index';
import { HeaderComponent } from '../views/header/index';
import { FooterComponent } from '../views/footer/index';
import { LoginComponent, LoginOrderComponent } from '../views/login/index';
import { DetailsActiviteComponent } from '../views/details-activite/index';
import { ReservationsComponent } from '../views/reservations/index';
import { PanierComponent } from '../views/panier/index';
import { AuthguardGuard, AdminGuard } from '../views/guards/index';
import { PhotosComponent } from '../views/photos/index';
import { MonCompteComponent } from '../views/mon-compte/index';
import { MentionsLegalesComponent } from '../views/mentions-legales/index';
import { CgvComponent } from '../views/cgv/index';
import { CguComponent } from '../views/cgu/index';
import { ActivitesListComponent } from '../views/activites-list/index';
import { PhotoClientCommentComponent } from '../views/photo-client-comment/index';
import { MesInfosComponent } from '../views/mes-infos/index';
import { PhotosGestionComponent } from '../views/photos-gestion/index';
import { MesGroupesComponent } from '../views/mes-groupes/index';



import { AdminMenuComponent,
         AdminHomeComponent,
         AdminLoginComponent,
         AdminHomeActiviteComponent,
         AddActiviteComponent,
         UpdateActiviteComponent,
         AdminCommentairesComponent,
         AdminCommentaireComponent,
         AdminClientsComponent,
         AdminClientComponent,
         AdminNoteComponent,
         AdminNotesComponent,
         AdminPlanningComponent,
         AdminPromotionsComponent,
         AdminReservationComponent,
         AdminReservationsComponent,
         AdminPlanningHeaderComponent} from '../views/admin/index';

import { BackComponent,
         SliderComponent,
         DatepickerComponent,
         DropdownHeaderComponent,
         RatingComponent,
         TimepickerComponent,
         PhotoRatingComponent,
         GmapAproposComponent,
         GmapActiviteComponent,
         CommentsComponent,
         ConfirmPopupComponent,
         UploadComponent,
         PhotoCommentsComponent,
         LanguesComponent,
         PanierMenuComponent,
         TabPanierComponent,
         InfoCompteComponent,
         TabReservationsComponent, 
         TabPhotosComponent,
         RecapInfosComponent,
         GroupesComponent,
         AmisComponent,
         OtherMenuComponent,
         CategoriesComponent} from '../views/utils/index';
  import {         SliderActivitePhotoComponent}  from '../views/utils/slider-activite-photo/slider-activite-photo.component';
// import {LocalizeRouterHttpLoader} from 'localize-router-http-loader';
// import {LocalizeRouterModule, LocalizeParser, LocalizeRouterSettings} from 'localize-router';

export const appRoutes: Routes = [
   { path: '', component: AccueilComponent },
   { path: 'login',   component: LoginComponent },
   { path: 'a-propos', component: AProposComponent },
   { path: 'admin/login', component:AdminLoginComponent},
   { path: 'admin/home', component:AdminHomeComponent, canActivate:[AdminGuard]},
   { path: 'admin/activites', component:AdminHomeActiviteComponent, canActivate:[AdminGuard]},
   { path: 'admin/add-activite', component: AddActiviteComponent, canActivate:[AdminGuard] },
   { path: 'admin/update-activite/:id', component: UpdateActiviteComponent, canActivate:[AdminGuard] },
   { path: 'admin/commentaires', component:AdminCommentairesComponent, canActivate:[AdminGuard]},
   { path: 'admin/commentaire/:id', component:AdminCommentaireComponent, canActivate:[AdminGuard]},
   { path: 'admin/reservations', component:AdminReservationsComponent, canActivate:[AdminGuard]},
   { path: 'admin/reservation/:id', component:AdminReservationComponent, canActivate:[AdminGuard]},
   { path: 'admin/clients', component:AdminClientsComponent, canActivate:[AdminGuard]},
   { path: 'admin/planning', component:AdminPlanningComponent, canActivate:[AdminGuard]},
   { path: 'admin/client/:id', component:AdminClientComponent, canActivate:[AdminGuard]},
   { path: 'admin/notes', component:AdminNotesComponent, canActivate:[AdminGuard]},
   { path: 'admin/note/:id', component:AdminNoteComponent, canActivate:[AdminGuard]},
   { path: 'admin/promotions', component:AdminPromotionsComponent, canActivate:[AdminGuard]},
   { path: 'loginOrder', component: LoginOrderComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-photos', component: PhotosComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-amis', component: MesGroupesComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-informations', component: MesInfosComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-photos/gestion/id', component: PhotosGestionComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-photos/id', component: PhotoClientCommentComponent, canActivate:[AuthguardGuard] },
   { path: 'mon-compte', component: MonCompteComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-reservations', component: ReservationsComponent, canActivate:[AuthguardGuard] },
   { path: 'activites', component: ActivitesComponent },
   { path: 'activite/:id', component: DetailsActiviteComponent },
   { path: 'categorie/:id', component: CategoriesComponent },
   { path: 'mon-panier', component: PanierComponent},
   { path: 'cgu', component: CguComponent},
   { path: 'cgv', component: CgvComponent},
   { path: 'mentions-legales', component: MentionsLegalesComponent},
   { path: '**', component: PageNotFoundComponent }


];
/*export function LocalizeFactory(translate, location, settings, http)  {
    return new LocalizeRouterHttpLoader(translate, location, settings, http);
}*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    SharedModule,
    Ng4FilesModule,
    LoadingModule.forRoot(LOADER_SETTINGS),
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: GMAP_KEY
    }),
    /*LocalizeRouterModule.forRoot(appRoutes, {
      parser: {
        provide: LocalizeParser,
        useFactory: LocalizeFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })*/

  ],
  declarations: [   
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AccueilComponent,
    LoginComponent,
    ActivitesComponent,
    AProposComponent,
    LoginOrderComponent,
    DetailsActiviteComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    AddActiviteComponent,
    UpdateActiviteComponent,
    AdminHomeActiviteComponent,
    AdminMenuComponent,
    BackComponent,
    SliderComponent,
    DatepickerComponent,
    DropdownHeaderComponent,
    RatingComponent,
    TimepickerComponent,
    SliderActivitePhotoComponent,
    PhotoRatingComponent,
    GmapAproposComponent,
    GmapActiviteComponent,
    ReservationsComponent,
    MonCompteComponent,
    PanierComponent,
    CommentsComponent,
    AdminCommentairesComponent,
    AdminClientsComponent,
    AdminClientComponent,
    AdminCommentaireComponent,
    AdminReservationsComponent,
    AdminReservationComponent,
    AdminNotesComponent,
    AdminNoteComponent,
    AdminPromotionsComponent,
    ActivitesListComponent,
    ConfirmPopupComponent,
    UploadComponent,
    AdminPlanningComponent,
    AdminPlanningHeaderComponent,
    PhotoCommentsComponent,
    LanguesComponent,
    PanierMenuComponent,
    CgvComponent,
    CguComponent,
    MentionsLegalesComponent,
    TabPanierComponent,
    PhotosComponent,
    PhotosGestionComponent,
    PhotoClientCommentComponent,
    InfoCompteComponent,
    MesInfosComponent,
    TabReservationsComponent,
    TabPhotosComponent,
    RecapInfosComponent,
    MesGroupesComponent,
    GroupesComponent,
    AmisComponent,
    OtherMenuComponent,
    CategoriesComponent
   
   ],
  	providers : [
  	AuthguardGuard,
    AdminGuard,
         { provide: LOCALE_ID, useValue: JSON.parse(localStorage.getItem('langue')) }

   ],
  	entryComponents: [
      ConfirmPopupComponent,
      PhotoCommentsComponent,
      TabPanierComponent
    ],
    exports: [
   	 RouterModule
  	]
})
export class AppRoutingModule { }
