import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActiviteComponent } from './update-activite.component';

describe('UpdateActiviteComponent', () => {
  let component: UpdateActiviteComponent;
  let fixture: ComponentFixture<UpdateActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
