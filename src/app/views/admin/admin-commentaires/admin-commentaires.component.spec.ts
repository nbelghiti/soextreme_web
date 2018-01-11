import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentairesComponent } from './admin-commentaires.component';

describe('AdminCommentairesComponent', () => {
  let component: AdminCommentairesComponent;
  let fixture: ComponentFixture<AdminCommentairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommentairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommentairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
