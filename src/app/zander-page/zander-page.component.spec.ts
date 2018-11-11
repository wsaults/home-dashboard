import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanderPageComponent } from './zander-page.component';

describe('ZanderPageComponent', () => {
  let component: ZanderPageComponent;
  let fixture: ComponentFixture<ZanderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
