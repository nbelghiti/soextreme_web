import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapAproposComponent } from './gmap-apropos.component';

describe('GmapAproposComponent', () => {
  let component: GmapAproposComponent;
  let fixture: ComponentFixture<GmapAproposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapAproposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapAproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
