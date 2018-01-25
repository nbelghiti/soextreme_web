import { TestBed, inject } from '@angular/core/testing';

import { AmisService } from './amis.service';

describe('AmisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmisService]
    });
  });

  it('should be created', inject([AmisService], (service: AmisService) => {
    expect(service).toBeTruthy();
  }));
});
