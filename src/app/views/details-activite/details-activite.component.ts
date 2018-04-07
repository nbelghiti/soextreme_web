import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Activites, Reservation, Commentaires, Photo, Session } from '../../models/index';
import * as myGlobals from '../../globals/index';
import { ActivitesService,
         AuthService,
         ReservationService,
         CommentairesService,
         PhotosService,
         SessionsService } from '../../services/index';
import { ConfirmPopupComponent,CommentsComponent } from '../../views/utils/index';

@Component({
    selector: 'app-details-activite',
    templateUrl: './details-activite.component.html',
    styleUrls: ['./details-activite.component.css'],
    providers: [ConfirmPopupComponent, CommentsComponent, NgbModal, NgbActiveModal]
})
export class DetailsActiviteComponent implements OnInit {
    @Input() nb_coms;
    myActivity: any = [];
    err: String = '';
    currency = myGlobals.CURRENCY.euro;
    form: FormGroup;
    commentform: FormGroup;
    img_path = myGlobals.ASSET_IMG_PATH;
    imageform: FormGroup;
    prix: number;
    nb_pers_cond = this.route.snapshot.paramMap.get('id') === '5a6646c4af4ffd00015dd437';
    myimg: any;
    formData: FormData;
    //nb_coms : any = [];
    nb_pers_min = myGlobals.NB_PERS.min;
    nb_pers_max = myGlobals.NB_PERS.max;
    nb_pers = 1;
    isLoggedIn = this.auth.isLoggedIn();
    session: String = JSON.parse(localStorage.getItem('currentSession'))._id;
    id_activite = this.route.snapshot.paramMap.get('id');
    rsv: Reservation = {

        //id_cli : myGlobals.CURRENT_CLIENT._id,
        id_cli: "",
        id_act: this.id_activite,
        heure_in: "",
        heure_out: "",
        date_rsv: null,
        _id: null,
        statut: 'non-reserve',
        session: this.session
    };
    comment: Commentaires = {
        type: null,
        texte: null,
        createdAt: null,
        id_act: null,
        id_client: null,
        visible: false,
        _id: null
    };
    imgphoto = {

        id_activite: null,
        id_cli: null,
        nom_img: null,
        // visible: true,
        _id: null

    };

    constructor(private route: ActivatedRoute,
        private router: Router,
        private sess: SessionsService,
        private elem: ElementRef,
        private modalService: NgbModal,
        private activite: ActivitesService,
        private location: Location,
        private photo: PhotosService,
        private translate: TranslateService,
        private commentaire: CommentairesService,
        private coms: CommentsComponent,
        private reservation: ReservationService,
        private auth: AuthService,
        private fb: FormBuilder) {


        this.commentform = this.fb.group({

            commentTexte: ['', [Validators.required, Validators.minLength(3)]]

        });
        this.imageform = this.fb.group({

            imgUploader: ['', [Validators.required, Validators.minLength(3)]]

        });
        this.form = this.fb.group({
            heure_in: this.fb.group({
            start_hour: ['',[Validators.required, Validators.minLength(3)]],
            start_min: ['',[Validators.required, Validators.minLength(3)]]

             }),
            nb_pers: ['',[Validators.required]],
            date: this.fb.group({

                mydate: ['', [Validators.required, Validators.minLength(3)]]

            })
        });

    }


    getActivite() {
        this.activite.getActivite(this.id_activite)
            .subscribe(data => {
                this.myActivity = data;
                this.prix = this.activite.getPrice(this.myActivity.prix, this.myActivity.remise);
            }, err => {

            });
        this.nb_coms = this.coms.nb_coms;

    }


    createReservation() {

        this.reservation.createReservation(this.rsv).subscribe(data => {

        }, err => {

        });

    }
    onSubmit() {
        let annee = this.form.get('date').get('mydate').value.year,
            mois = this.form.get('date').get('mydate').value.month,
            jour = this.form.get('date').get('mydate').value.day,
            date = `${annee},${mois},${jour}`;

        this.rsv.date_rsv = new Date(date);
        this.sess.addCartItem();
        this.createReservation();
        setTimeout(() => {
            this.openPopup();
        }, 500);
        setTimeout(() => {
            location.reload();
        }, 4000);
    }

    onFileChange(event) {

        if (event.target.files.length > 0) {
            let file = event.target.files[0];
            // this.form.get('imgUploader').setValue(file);
            this.imageform.controls['imgUploader'].setValue(file ? file.name : '');
        }

    }
    changing(){
        console.log(this.form.get('nb_pers').value);
    }
    openPopup() {
        const modalRef = this.modalService.open(ConfirmPopupComponent);
        var popup_info = ["details.reserv.popup.success.title",
            "details.reserv.popup.success.content",
            "details.reserv.popup.success.btclose"
        ];

        this.translate.get(popup_info).subscribe((res: String) => {
            modalRef.componentInstance.title = res[popup_info[0]];
            modalRef.componentInstance.content = res[popup_info[1]];
            modalRef.componentInstance.btClose = res[popup_info[2]];
        }, err => {

        });
    }

    openPopupComment() {
        const modalRef = this.modalService.open(ConfirmPopupComponent);
        var popup_info = ["details.comment.title",
            "details.comment.send",
            "details.reserv.popup.success.btclose"
        ];

        this.translate.get(popup_info).subscribe((res: String) => {
            modalRef.componentInstance.title = res[popup_info[0]];
            modalRef.componentInstance.content = res[popup_info[1]];
            modalRef.componentInstance.btClose = res[popup_info[2]];
        }, err => {

        });
    }


    uploadedPhoto() {
        this.imgphoto.id_cli = myGlobals.CURRENT_CLIENT._id;
        this.imgphoto.id_activite = this.id_activite;
        //this.prepareSave();
        this.imgphoto.nom_img = this.imageform.get('imgUploader').value;


        /*  this.photo.createPhoto(this.imgphoto).subscribe(data => {
        
      },err =>{
      
    });*/
    }

    submitPhoto() {
        if (this.isLoggedIn) {

            this.uploadedPhoto();
        } else {


        }

    }
    errPopup() {
        const modalRef = this.modalService.open(ConfirmPopupComponent);
        var popup_info = ["details.comment.title",
            "details.comment.err.empty",
            "details.reserv.popup.success.btclose"
        ];

        this.translate.get(popup_info).subscribe((res: String) => {
            modalRef.componentInstance.title = res[popup_info[0]];
            modalRef.componentInstance.content = res[popup_info[1]];
            modalRef.componentInstance.btClose = res[popup_info[2]];
        }, err => {

        });
    }
    createComment() {



        if (this.isLoggedIn) {

            let commentTexte = this.commentform.get('commentTexte').value;
            if (commentTexte !== null && commentTexte !== '') {
                this.comment.id_client = myGlobals.CURRENT_CLIENT._id;
                this.comment.id_act = this.id_activite;
                this.comment.createdAt = new Date(Date.now());
                this.comment.texte = commentTexte;
                this.comment.type = "";

                this.commentaire.createCommentaire(this.comment).subscribe(data => {

                    this.openPopupComment();
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                }, err => {

                });
            } else {
                this.errPopup();
            }
            //this.err='';


        }
        //return this.err;

    }
    errComment() {

        if (!this.isLoggedIn) {
            this.translate.get("details.comment.err.login").subscribe((res: String) => {
                this.err = res;
            }, err => {

            })


        } else {


            this.err = '';

        }

    }
    ngOnInit() {

        this.getActivite();
        this.errComment();

    }

}