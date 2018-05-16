import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbTimepickerConfig, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { ActivitesService } from '../../../services/index';
@Component({
    selector: 'app-timepicker',
    templateUrl: './timepicker.component.html',
    styleUrls: ['./timepicker.component.css'],
    providers: [NgbTimepickerConfig]
})

export class TimepickerComponent implements OnInit {
    @Input('group')
    heure_in: FormGroup;
    prix : any ;
    @Output() myHeure : EventEmitter < NgbTimeStruct > = new EventEmitter < NgbTimeStruct > ();

    minuteStep = 15;
    hourStep = 1;
    time:NgbTimeStruct  = {
        hour: 13,
        minute: 30,
        second: 0
    };
    constructor(config: NgbTimepickerConfig, private activite: ActivitesService) {
        // customize default values of ratings used by this component tree
        config.seconds = false;
        config.spinners = true;
    }

    ngOnInit() {
        this.heure_in = new FormGroup({
           start_hour: new FormControl(),
           start_min : new FormControl()
        });
    }
    changehd(event){
        if (this.time.hour>=20) {
            this.time.hour= 8

        }else if(this.time.hour<8){
            this.time.hour= 8 
        }
        this.myHeure.emit(this.time);
    }
 

}
