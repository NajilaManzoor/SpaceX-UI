import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchYearViewComponent } from './launch-year-view.component';

describe('LaunchYearViewComponent', () => {
  let component: LaunchYearViewComponent;
  let fixture: ComponentFixture<LaunchYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchYearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
   