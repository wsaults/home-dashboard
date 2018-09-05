import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DashboardComponent} from './dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UserSearchComponent} from '../user-search/user-search.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let subject;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, UserSearchComponent],
      imports: [RouterTestingModule],
      providers: [ HttpClientModule, HttpClient, HttpHandler ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    subject = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the header to match', () => {
    expect(subject.querySelector('h3').textContent).toEqual('Dashboard');
  });

  // describe('Users', () => {
  //   it('should contain the Test1 user', function () {
  //     console.log(component.users);
  //     expect(component.users[0].name).toEqual('Test1');
  //   });
  //
  //   it('should contain the Dad tile', function () {
  //     expect(subject.querySelectorAll('.user')[0].textContent).toEqual('Dad');
  //   });
  // });
});
