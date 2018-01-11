import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeActiviteComponent } from './admin-home-activite.component';

describe('AdminHomeActiviteComponent', () => {
  let component: AdminHomeActiviteComponent;
  let fixture: ComponentFixture<AdminHomeActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
