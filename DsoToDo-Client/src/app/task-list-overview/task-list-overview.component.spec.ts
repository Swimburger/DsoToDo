import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListOverviewComponent } from './task-list-overview.component';

describe('TaskListOverviewComponent', () => {
  let component: TaskListOverviewComponent;
  let fixture: ComponentFixture<TaskListOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
