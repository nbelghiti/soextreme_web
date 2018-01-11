import { TestBed, inject } from '@angular/core/testing';

import { GerantService } from './gerant.service';

describe('GerantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerantService]
    });
  });

  it('should be created', inject([GerantService], (service: GerantService) => {
    expect(service).toBeTruthy();
  }));
});
