import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoClientCommentComponent } from './photo-client-comment.component';

describe('PhotoClientCommentComponent', () => {
  let component: PhotoClientCommentComponent;
  let fixture: ComponentFixture<PhotoClientCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoClientCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoClientCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
