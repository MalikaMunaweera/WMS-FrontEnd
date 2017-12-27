import { Injectable } from '@angular/core';
import { WorkflowActivity } from './Models/workflow-activity';
import { WorkflowActivityType } from './Models/workflow-activity-type';
import { WorkflowActivityFieldType } from './Models/workflow-activity-field-type';
import { Workflow } from './Models/workflow';

@Injectable()
export class WorkflowService {

  holdingTo: Workflow;

  fieldType_approver: WorkflowActivityFieldType = {
    id: 1,
    name: 'Approver',
    dataType: 'email'
  };

  fieldType_approval: WorkflowActivityFieldType = {
    id: 2,
    name: 'Approval',
    dataType: 'boolean'
  };

  fieldType_due: WorkflowActivityFieldType = {
    id: 3,
    name: 'Due date',
    dataType: 'Date'
  };

  activityType_approval = new WorkflowActivityType(1, 'Approval', [this.fieldType_approver, this.fieldType_approval, this.fieldType_due]);

  constructor() { }

  getNewWorkflowActivity(activityTypeId: number): WorkflowActivity {

    switch (activityTypeId) {
      case 1:
        return new WorkflowActivity(this.activityType_approval);
    }
  }

  createNewWorkflow(workflow: Workflow) {

    this.holdingTo = workflow;

  }

  getWorkflow(): Workflow {

    return this.holdingTo;
    
  }

}
