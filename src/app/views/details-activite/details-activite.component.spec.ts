import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitesService,
         AuthService,
         ReservationService,
         CommentairesService,
         PhotosService,
         SessionsService } from '../../services/index';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { ConfirmPopupComponent,CommentsComponent } from '../../views/utils/index';

import { DetailsActiviteComponent } from './details-activite.component';

describe('DetailsActiviteComponent', () => {
  let component: DetailsActiviteComponent;
  let fixture: ComponentFixture<DetailsActiviteComponent>;
  let activitesService: ActivitesService;
  let authService: AuthService;
  let reservationService: ReservationService;
  let commentairesService: CommentairesService;
  let photosService: PhotosService;
  let sessionsService: SessionsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsActiviteComponent ],
     providers: [ActivitesService,AuthService,ReservationService,CommentairesService,PhotosService,
         SessionsService,ConfirmPopupComponent, CommentsComponent, NgbModal, NgbActiveModal]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsActiviteComponent);
    component = fixture.componentInstance;
    activitesService = TestBed.get(ActivitesService); 
    authService = TestBed.get(AuthService); 
    reservationService = TestBed.get(ReservationService); 
    commentairesService = TestBed.get(CommentairesService); 
    photosService = TestBed.get(PhotosService); 
    sessionsService = TestBed.get(SessionsService); 

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
