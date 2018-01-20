import {Component, Injectable} from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {I18N_VALUES } from '../../../globals/index';
export class CustomNgdatepicker extends NgbDatepickerI18n {
    langue = JSON.parse(localStorage.getItem('langue'));
    constructor() {
        super();
    }

    getWeekdayShortName(weekday: number): string {
        return I18N_VALUES[this.langue].weekdays[weekday - 1];
    }
    getMonthShortName(month: number): string {
        return I18N_VALUES[this.langue].months[month - 1];
    }
    getMonthFullName(month: number): string {
        return this.getMonthShortName(month);
    }
}