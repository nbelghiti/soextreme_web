import { TestBed, inject } from '@angular/core/testing';

import { ActivitesService } from './activites.service';

describe('ActivitesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivitesService]
    });
  });

  it('should be created', inject([ActivitesService], (service: ActivitesService) => {
    expect(service).toBeTruthy();
  }));
});
