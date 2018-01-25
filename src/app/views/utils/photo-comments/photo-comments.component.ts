import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import * as myGlobals from '../../../globals/index';
import { Activites, Reservation, Commentaires, Photo, Session } from '../../../models/index';
import { ActivitesService,
         AuthService,
         ReservationService,
         CommentairesService,
         PhotosService,
         SessionsService } from '../../../services/index';

@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

    @Input() title;
    @Input() content;
    @Input() btClose;
    commentform: FormGroup;
    id_activite = this.route.snapshot.paramMap.get('id');
    err: string = '';

    isLoggedIn = this.auth.isLoggedIn();
    comment: Commentaires = {
        type: null,
        texte: null,
        createdAt: null,
        id_act: null,
        id_client: null,
        visible: false,
        _id: null
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public activeModal: NgbActiveModal,
        private auth: AuthService,
        private fb: FormBuilder,
        private commentaire: CommentairesService,
        private translate: TranslateService

    ) {
        this.commentform = this.fb.group({

            commentTexte: ['', [Validators.required, Validators.minLength(3)]]

        });
    }

    errComment() {

        if (!this.isLoggedIn) {
            this.translate.get("details.comment.err.login").subscribe((res: string) => {
                this.err = res;
            }, err => {

            })
        } else {
            this.err = '';
        }

    }
    ngOnInit() {

        this.errComment();

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

                }, err => {

                });
            } else {

                this.translate.get("details.comment.err.empty").subscribe((res: String) => {
                    alert(res);

                }, err => {

                });
            }

        }

    }
}