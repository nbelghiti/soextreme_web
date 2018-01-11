import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderActivitePhotoComponent } from './slider-activite-photo.component';

describe('SliderActivitePhotoComponent', () => {
  let component: SliderActivitePhotoComponent;
  let fixture: ComponentFixture<SliderActivitePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderActivitePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderActivitePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
