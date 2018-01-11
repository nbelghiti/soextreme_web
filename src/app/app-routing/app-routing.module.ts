import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { LANGUE, GMAP_KEY } from '../globals/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng4FilesModule } from 'angular4-files-upload';
import { CalendarModule } from 'angular-calendar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
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
import { AdminMenuComponent,AdminHomeComponent, AdminLoginComponent, AdminHomeActiviteComponent,
         AddActiviteComponent, UpdateActiviteComponent } from '../views/admin/index';
import { BackComponent } from '../views/utils/index';
import { SliderComponent } from '../views/utils/slider/slider.component';
import { DatepickerComponent } from '../views/utils/index';
import { DropdownHeaderComponent } from '../views/utils/index';
import { RatingComponent } from '../views/utils/index';
import { TimepickerComponent } from '../views/utils/index';
import { SliderActivitePhotoComponent } from '../views/utils/index';
import { PhotoRatingComponent } from '../views/utils/photo-rating/index';
import { GmapAproposComponent } from '../views/utils/gmaps/gmap-apropos/index';
import { GmapActiviteComponent } from '../views/utils/gmaps/gmap-activite/index';
import { ReservationsComponent } from '../views/reservations/index';
import { MonCompteComponent } from '../views/mon-compte/mon-compte.component';
import { PanierComponent } from '../views/panier/index';
import { ValidcmdComponent } from '../views/utils/validcmd/validcmd.component';
import { CommentsComponent } from '../views/utils/comments/comments.component';
import { AdminCommentairesComponent } from '../views/admin/admin-commentaires/admin-commentaires.component';
import { AdminClientsComponent } from '../views/admin/admin-clients/clients.component';
import { AdminClientComponent } from '../views/admin/admin-client/client.component';
import { AdminCommentaireComponent } from '../views/admin/admin-commentaire/admin-commentaire.component';
import { AdminReservationsComponent } from '../views/admin/admin-reservations/admin-reservations.component';
import { AdminReservationComponent } from '../views/admin/admin-reservation/admin-reservation.component';
import { AdminNotesComponent } from '../views/admin/admin-notes/admin-notes.component';
import { AdminNoteComponent } from '../views/admin/admin-note/admin-note.component';
import { AdminPromotionsComponent } from '../views/admin/admin-promotions/admin-promotions.component';
import { ActivitesListComponent } from '../views/activites-list/activites-list.component';
import { ConfirmPopupComponent } from '../views/utils/confirm-popup/confirm-popup.component';
import { UploadComponent } from '../views/utils/upload/upload.component';
import { AdminPlanningComponent } from '../views/admin/admin-planning/admin-planning.component';
import { AdminPlanningHeaderComponent } from '../views/admin/admin-planning/admin-planning-header/admin-planning-header.component';
import { PhotoCommentsComponent } from '../views/utils/photo-comments/photo-comments.component';
import { LanguesComponent } from '../views/utils/langues/langues.component';
import { AuthguardGuard, AdminGuard } from '../views/guards/index';
import { PanierMenuComponent } from '../views/utils/panier-menu/panier-menu.component';
import { CgvComponent } from '../views/cgv/cgv.component';
import { CguComponent } from '../views/cgu/cgu.component';
import { MentionsLegalesComponent } from '../views/mentions-legales/mentions-legales.component';


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
   { path: 'admin/planning', component:AdminPlanningComponent/*, canActivate:[AdminGuard]*/},
   { path: 'admin/client/:id', component:AdminClientComponent, canActivate:[AdminGuard]},
   { path: 'admin/notes', component:AdminNotesComponent, canActivate:[AdminGuard]},
   { path: 'admin/note/:id', component:AdminNoteComponent, canActivate:[AdminGuard]},
   { path: 'admin/promotions', component:AdminPromotionsComponent, canActivate:[AdminGuard]},
   { path: 'activites', component: ActivitesComponent },
   { path: 'activite/:id', component: DetailsActiviteComponent },
   { path: 'loginOrder', component: LoginOrderComponent, canActivate:[AuthguardGuard] },
   { path: 'mon-panier', component: PanierComponent},
   { path: 'cgu', component: CguComponent},
   { path: 'cgv', component: CgvComponent},
   { path: 'mentions-legales', component: MentionsLegalesComponent},
   { path: 'mon-compte', component: MonCompteComponent, canActivate:[AuthguardGuard] },
   { path: 'mes-reservations', component: ReservationsComponent, canActivate:[AuthguardGuard] },
   { path: '**', component: PageNotFoundComponent }


];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    SharedModule,
    Ng4FilesModule,
    Ng4LoadingSpinnerModule,
    CalendarModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: GMAP_KEY
    }),
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
    ValidcmdComponent,
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
    MentionsLegalesComponent
    ],
  	providers : [
  	AuthguardGuard,
    AdminGuard,
         { provide: LOCALE_ID, useValue: LANGUE }

  	],
  	entryComponents: [
      ConfirmPopupComponent,
      PhotoCommentsComponent
    ],
    exports: [
   	 RouterModule
  	]
})
export class AppRoutingModule { }
