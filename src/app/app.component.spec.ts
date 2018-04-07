import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule  } from '@angular/router/testing';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {SharedModule} from './shared/shared.module';
import { SessionsService } from './services/index';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let sessionsService: SessionsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [SessionsService]
    }).compileComponents();
  }));
      sessionsService = TestBed.get(SessionsService); 
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
