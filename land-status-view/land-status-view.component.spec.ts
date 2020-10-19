import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandStatusViewComponent } from './land-status-view.component';

describe('LandStatusViewComponent', () => {
  let component: LandStatusViewComponent;
  let fixture: ComponentFixture<LandStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 