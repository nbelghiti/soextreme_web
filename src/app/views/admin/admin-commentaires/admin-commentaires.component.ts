import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';
@Component({
    selector: 'app-admin-commentaires',
    templateUrl: './admin-commentaires.component.html',
    styleUrls: ['./admin-commentaires.component.css']
})
export class AdminCommentairesComponent implements OnInit {
    commentaires: Commentaires[] = [];
    id_cli_com: any;
    id_act_com: any;
    date_com: any = [];
    user_info_com: any = [];
    act_com: any = [];
    isSuspended: boolean = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private activite: ActivitesService,
        private commentaire: CommentairesService,
        private date: DateService,
        private auth: AuthService) {}

    getUserInfoCom(id: String) {

        this.auth.getAllClients().map((result) => result.filter(item => item._id === id))
            .subscribe((response) => {
                this.user_info_com.push(response);
            }, err => {


            })

    }
    getActCom(id: String) {
        this.activite.getAllActivites().map((result) => result.filter(item => item._id === id))
            .subscribe((response) => {
                this.act_com.push(response);
            }, err => {


            })

    }
    toggleVisible(index) {
        if (this.commentaires[index].visible === true) {

            this.commentaires[index].visible = false;
        } else {

            this.commentaires[index].visible = true;
        }

        this.commentaire.updateCommentaire(this.commentaires[index]).subscribe((response) => {

        }, err => {


        });

    }
    getAllComments() {

        this.commentaire.getAllCommentaires()

        .subscribe((data) => {
            this.commentaires = data;
            if (this.commentaires.length > 0) {

                for (let i = 0; i < this.commentaires.length; i++) {
                    this.id_cli_com = this.commentaires[i].id_client;
                    this.id_act_com = this.commentaires[i].id_act;
                    this.date_com.push(this.date.getFullDate(this.commentaires[i].createdAt));
                    this.getUserInfoCom(this.id_cli_com);
                    this.getActCom(this.id_act_com);
                }
            }
        }, err => {


        });

    }
    ngOnInit() {

        this.getAllComments();
    }

}