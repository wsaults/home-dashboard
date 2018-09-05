import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let subject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    subject = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'home-dashboard'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Home');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Home Observer');
  }));

  describe('Navigation buttons', () => {
    it('should contain the dashboard button', function () {
      expect(subject.querySelectorAll('a')[0].textContent).toEqual('Dashboard');
    });

    it('should contain the users button', function () {
      expect(subject.querySelectorAll('a')[1].textContent).toEqual('Users');
    });
  });
});
