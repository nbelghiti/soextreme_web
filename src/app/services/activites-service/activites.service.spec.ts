import { TestBed, inject } from '@angular/core/testing';
import {  Http, Headers, RequestOptions,Response } from '@angular/http';

import { ActivitesService } from './activites.service';

describe('ActivitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitesService, Http, Headers, RequestOptions,Response ]
    });
  });

  it('should be created', inject([ActivitesService], (service: ActivitesService) => {
    expect(service).toBeTruthy();
  }));
});
