import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherMenuComponent } from './other-menu.component';

describe('OtherMenuComponent', () => {
  let component: OtherMenuComponent;
  let fixture: ComponentFixture<OtherMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
