import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierMenuComponent } from './panier-menu.component';

describe('PanierMenuComponent', () => {
  let component: PanierMenuComponent;
  let fixture: ComponentFixture<PanierMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
