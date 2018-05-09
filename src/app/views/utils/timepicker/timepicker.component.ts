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
    @Output() myheure = new EventEmitter<string>();     
    heure_in: FormGroup;
    prix : any ;

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
        console.log(this.time)
    }
    getheure(){
       let user_hours = this.time.hour+':'+this.time.minute+':'+this.time.second;
       this.myheure.emit(user_hours);

    }
     /*change(event){
        console.log(this.time);
         

        if((Date.parse('01/01/2011 08:00:00')<=Date.parse('01/01/2011 '+user_hours) 
         && Date.parse('01/01/2011 10:00:00')>=Date.parse('01/01/2011 '+user_hours))
         || (Date.parse('01/01/2011 18:00:00')<=Date.parse('01/01/2011 '+user_hours) 
         && Date.parse('01/01/2011 20:00:00')>=Date.parse('01/01/2011 '+user_hours))){

             console.log('prix à diminuer');
         } else {

         }

    }*/
 
   
    
    /*  compareHours(){
        console.log(this.form.get('heure_in').value );
        let user_hours = this.form.get('heure_in').get('start_hour').value+':'+this.form.get('heure_in').get('start_hour').value+':00';
        console.log(Date.parse('01/01/2011 15:20:45')>Date.parse('01/01/2011 '+user_hours));

    }*/


}
