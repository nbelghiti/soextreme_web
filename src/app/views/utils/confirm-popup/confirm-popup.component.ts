import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css']
})
export class ConfirmPopupComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() btClose;
 
  constructor(public activeModal: NgbActiveModal) {}
  
  ngOnInit() {
  }

}
