import { Component, OnInit } from '@angular/core';
import { Workflow } from '../Models/workflow';
import { WorkflowActivity } from '../Models/workflow-activity';
import { WorkflowActivityType } from '../Models/workflow-activity-type';
import { WorkflowService } from '../workflow.service';


@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {

  buttonText = 'Create';
  workflow = new Workflow([]);


  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
  }

  addActivity(activtyType: number) {

    this.workflow.activities.push(this.workflowService.getNewWorkflowActivity(activtyType));
    // console.log('The index is : ' + this.workflow.activities[0].type.fields);

  }

  removeActivity(index: number) {

    // console.log('The index is : ' + index);
    this.workflow.activities.splice(index, 1);

  }

  onSubmit() {
    this.workflowService.createNewWorkflow(this.workflow);
    this.workflow = new Workflow([]);
  }

  editVersion() {
    this.workflow = this.workflowService.getWorkflow();
  }

  onCancel() {
    this.workflow = new Workflow([]);
  }

}
