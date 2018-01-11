import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientComponent } from './client.component';

describe('AdminClientComponent', () => {
  let component: AdminClientComponent;
  let fixture: ComponentFixture<AdminClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
