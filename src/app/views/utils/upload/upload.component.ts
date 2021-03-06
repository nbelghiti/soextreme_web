import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {  Ng4FilesStatus,  Ng4FilesSelected} from 'angular4-files-upload';
import { Photo } from '../../../models/index';
import { PhotosService } from '../../../services/index';
import * as myGlobals from '../../../globals/index';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    //@ViewChild("fileInput") fileInput;
    id_activite = this.route.snapshot.paramMap.get('id');

    imgphoto = {

        id_activite: null,
        id_cli: null,
        nom_img: null,
        // visible: true,
        _id: null

    };
    input: any;
    public selectedFiles;

    public filesSelect(selectedFiles: Ng4FilesSelected): void {
        if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
            this.selectedFiles = selectedFiles.status;
            return;

            // Hnadle error statuses here
        }

        this.selectedFiles = Array.from(selectedFiles.files).map(file => {


            return file;


        });
    }
    constructor(private photo: PhotosService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {}
    addFile() {
            let input = new FormData();
            input.append("file", this.selectedFiles[0]);
            this.imgphoto.id_cli = JSON.parse(localStorage.getItem('currentUser'))._id;
            this.imgphoto.nom_img = this.selectedFiles[0].name;
            this.imgphoto.id_activite = this.id_activite;
            this.photo.createPhoto(this.imgphoto).subscribe(data => {

                }, err => {

                })

        }
        
    ngOnInit() {}

}