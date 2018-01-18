import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbCarouselConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PhotoCommentsComponent,CommentsComponent } from '../../../views/utils/index';

@Component({
  selector: 'app-slider-activite-photo',
  templateUrl: './slider-activite-photo.component.html',
  styleUrls: ['./slider-activite-photo.component.css'],
 // providers: [NgbCarouselConfig, PhotoCommentsComponent, CommentsComponent, NgbModal, NgbActiveModal]

})
export class SliderActivitePhotoComponent implements OnInit {

    constructor(config: NgbCarouselConfig, private modalService: NgbModal, private el: ElementRef) { 
  
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  
  }
  openPopupPhotoCom(event) {
    const modalRef = this.modalService.open(PhotoCommentsComponent);
    modalRef.componentInstance.title = 'Photo';
    modalRef.componentInstance.content = event.toElement.src;
    modalRef.componentInstance.btClose = 'Fermer';

    console.log(event.toElement.src);
  }


  ngOnInit() {
  }

}
