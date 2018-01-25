import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute } from '@angular/router';
import { PhotoCommentsComponent,CommentsComponent } from '../../../views/utils/index';
import {PhotosService} from '../../../services/index';
@Component({
  selector: 'app-slider-activite-photo',
  templateUrl: './slider-activite-photo.component.html',
  styleUrls: ['./slider-activite-photo.component.css'],
 // providers: [NgbCarouselConfig, PhotoCommentsComponent, CommentsComponent, NgbModal, NgbActiveModal]

})
export class SliderActivitePhotoComponent implements OnInit {
    id_activite = this.route.snapshot.paramMap.get('id');
    allphotos : any = [];

    constructor(config: NgbCarouselConfig,
                private modalService: NgbModal,
                private el: ElementRef,
                private route: ActivatedRoute,
                private router: Router,
                private photos : PhotosService) { 
  
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  
  }
  openPopupPhotoCom(event) {
    const modalRef = this.modalService.open(PhotoCommentsComponent);
    modalRef.componentInstance.title = 'Photo';
    modalRef.componentInstance.content = event.target.src;
    modalRef.componentInstance.btClose = 'Fermer';

  }
  getAllPhotosByActivite(){

    this.photos.getPhotoActivite(this.id_activite).subscribe(data => {

      this.allphotos = data;
    })
  }

  ngOnInit() {
    this.getAllPhotosByActivite();
  }

}
