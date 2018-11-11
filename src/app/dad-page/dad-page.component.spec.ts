import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadPageComponent } from './dad-page.component';

describe('DadPageComponent', () => {
  let component: DadPageComponent;
  let fixture: ComponentFixture<DadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
