import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoteComponent } from './admin-note.component';

describe('AdminNoteComponent', () => {
  let component: AdminNoteComponent;
  let fixture: ComponentFixture<AdminNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
