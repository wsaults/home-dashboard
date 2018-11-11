import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaacPageComponent } from './isaac-page.component';

describe('IsaacPageComponent', () => {
  let component: IsaacPageComponent;
  let fixture: ComponentFixture<IsaacPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsaacPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsaacPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
