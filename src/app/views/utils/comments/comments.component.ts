import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Activites,  Commentaires, User } from '../../../models/index';
import * as myGlobals from '../../../globals/index';
import { ActivitesService,CommentairesService, AuthService,DateService } from '../../../services/index';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    commentaires: Commentaires[] = [];
    id_cli_com: any;
    id_act_com: any = this.route.snapshot.paramMap.get('id');
    test: any;
    nb_coms: any = [];
    date_com: any = [];
    user_info_com : any = [];
    constructor(private route: ActivatedRoute,
        private router: Router,
        private activite: ActivitesService,
        private commentaire: CommentairesService,
        private date: DateService,
        private auth: AuthService) {}

    getUserInfoCom(id: String) {

        this.auth.getAllClients().map((result) => result.filter(item => item._id === id))
            .subscribe((response) => {
                this.user_info_com.push(response[0]);
            }, err => {

            })

    }
    getAllComments(id: String) {

        this.commentaire.getAllCommentaires()
            .map((result) => result.filter(item => item.id_act === id && item.visible === false))
            .subscribe((data) => {
                this.commentaires = data; 
                this.nb_coms = this.commentaires.length;
                if (this.commentaires.length > 0) {
                    for (let i = 0; i < this.commentaires.length; i++) {
                        this.id_cli_com = this.commentaires[i].id_client;
                        //this.id_act_com = this.commentaires[i].id_act;
                        this.date_com.push(this.date.getFullDate(this.commentaires[i].createdAt));
                        this.getUserInfoCom(this.commentaires[i].id_client);
                    }

                }
            }, err => {

            });


    }

    ngOnInit() {
        this.getAllComments(this.id_act_com);

    }

}