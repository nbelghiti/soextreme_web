import { TestBed, inject } from '@angular/core/testing';

import { GroupesService } from './groupes.service';

describe('GroupesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupesService]
    });
  });

  it('should be created', inject([GroupesService], (service: GroupesService) => {
    expect(service).toBeTruthy();
  }));
});
