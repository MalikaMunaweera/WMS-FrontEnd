import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActivityExecutionComponent } from './workflow-activity-execution.component';

describe('WorkflowActivityExecutionComponent', () => {
  let component: WorkflowActivityExecutionComponent;
  let fixture: ComponentFixture<WorkflowActivityExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowActivityExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActivityExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
