import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrderComponent } from './login-order.component';

describe('LoginOrderComponent', () => {
  let component: LoginOrderComponent;
  let fixture: ComponentFixture<LoginOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
