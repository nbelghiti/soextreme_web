import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidcmdComponent } from './validcmd.component';

describe('ValidcmdComponent', () => {
  let component: ValidcmdComponent;
  let fixture: ComponentFixture<ValidcmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidcmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
