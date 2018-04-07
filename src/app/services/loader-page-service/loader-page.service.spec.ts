import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoaderPageService } from './loader-page.service';

describe('LoaderPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderPageService, Router]
    });
  });

  it('should be created', inject([LoaderPageService], (service: LoaderPageService) => {
    expect(service).toBeTruthy();
  }));
});
