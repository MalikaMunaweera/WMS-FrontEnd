import { TestBed, inject } from '@angular/core/testing';

import { WorkflowExecutionService } from './workflow-execution.service';

describe('WorkflowExecutionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowExecutionService]
    });
  });

  it('should be created', inject([WorkflowExecutionService], (service: WorkflowExecutionService) => {
    expect(service).toBeTruthy();
  }));
});
