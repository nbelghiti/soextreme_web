import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapActiviteComponent } from './gmap-activite.component';

describe('GmapActiviteComponent', () => {
  let component: GmapActiviteComponent;
  let fixture: ComponentFixture<GmapActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
