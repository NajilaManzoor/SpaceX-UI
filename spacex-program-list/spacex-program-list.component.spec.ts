import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexProgramListComponent } from './spacex-program-list.component';

describe('SpacexProgramListComponent', () => {
  let component: SpacexProgramListComponent;
  let fixture: ComponentFixture<SpacexProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexProgramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});     
