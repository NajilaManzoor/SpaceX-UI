import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchStatusViewComponent } from './launch-status-view.component';

describe('LaunchStatusViewComponent', () => {
  let component: LaunchStatusViewComponent;
  let fixture: ComponentFixture<LaunchStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {   
    fixture = TestBed.createComponent(LaunchStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
