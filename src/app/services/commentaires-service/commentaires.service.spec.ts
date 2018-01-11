import { TestBed, inject } from '@angular/core/testing';

import { CommentairesService } from './commentaires.service';

describe('CommentairesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentairesService]
    });
  });

  it('should be created', inject([CommentairesService], (service: CommentairesService) => {
    expect(service).toBeTruthy();
  }));
});
