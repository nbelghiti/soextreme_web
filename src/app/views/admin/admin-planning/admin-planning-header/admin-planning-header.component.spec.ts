import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanningHeaderComponent } from './admin-planning-header.component';

describe('AdminPlanningHeaderComponent', () => {
  let component: AdminPlanningHeaderComponent;
  let fixture: ComponentFixture<AdminPlanningHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlanningHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanningHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
