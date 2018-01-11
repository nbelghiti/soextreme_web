import { TestBed, inject } from '@angular/core/testing';

import { LoaderPageService } from './loader-page.service';

describe('LoaderPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderPageService]
    });
  });

  it('should be created', inject([LoaderPageService], (service: LoaderPageService) => {
    expect(service).toBeTruthy();
  }));
});
