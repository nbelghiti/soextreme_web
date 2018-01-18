import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPanierComponent } from './tab-panier.component';

describe('TabPanierComponent', () => {
  let component: TabPanierComponent;
  let fixture: ComponentFixture<TabPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
