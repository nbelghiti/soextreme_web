import {Component, Injectable} from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {LANGUE,I18N_VALUES } from '../../../globals/index';
export class CustomNgdatepicker extends NgbDatepickerI18n {

  constructor() {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[LANGUE].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[LANGUE].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }
}