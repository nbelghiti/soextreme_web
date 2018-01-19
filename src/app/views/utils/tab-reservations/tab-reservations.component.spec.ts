import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReservationsComponent } from './tab-reservations.component';

describe('TabReservationsComponent', () => {
  let component: TabReservationsComponent;
  let fixture: ComponentFixture<TabReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
