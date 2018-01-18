import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosGestionComponent } from './photos-gestion.component';

describe('PhotosGestionComponent', () => {
  let component: PhotosGestionComponent;
  let fixture: ComponentFixture<PhotosGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
