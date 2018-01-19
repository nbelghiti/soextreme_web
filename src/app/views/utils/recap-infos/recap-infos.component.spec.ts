import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapInfosComponent } from './recap-infos.component';

describe('RecapInfosComponent', () => {
  let component: RecapInfosComponent;
  let fixture: ComponentFixture<RecapInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
