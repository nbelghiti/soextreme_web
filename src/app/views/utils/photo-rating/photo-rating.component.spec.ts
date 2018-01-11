import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRatingComponent } from './photo-rating.component';

describe('PhotoRatingComponent', () => {
  let component: PhotoRatingComponent;
  let fixture: ComponentFixture<PhotoRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
