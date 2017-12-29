import { Component, OnInit } from '@angular/core';
import { Workflow } from '../Models/workflow';
import { WorkflowService } from '../workflow.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserStory } from '../Models/user-story';
import { UserStoryService } from '../user-story.service';
import { WorkflowExecution } from '../Models/workflow-execution';
import { forEach } from '@angular/router/src/utils/collection';
import { WorkflowActivityExecution } from '../Models/workflow-activity-execution';

@Component({
  selector: 'app-workflow-execution',
  templateUrl: './workflow-execution.component.html',
  styleUrls: ['./workflow-execution.component.scss']
})
export class WorkflowExecutionComponent implements OnInit {

  buttonText = 'Execute';


  selectedWorkflow: Workflow;
  selectedUserStory: UserStory;

  allNewUserStories: UserStory[];
  allActiveWorkflows: Workflow[];

  constructor(private workflowService: WorkflowService, private router: Router, private userStoryService: UserStoryService) { }

  ngOnInit() {

    this.workflowService.getWorkflowsByActive(true).subscribe(data => {
      this.allActiveWorkflows = data;
      console.log('wfs: ', this.allActiveWorkflows);
    });

    this.userStoryService.getUserStoriesByStatus('New').subscribe(data => {
      this.allNewUserStories = data;
    });

  }

  onSubmit() {

    let activityExecutions: WorkflowActivityExecution[];

    this.selectedWorkflow.activities.forEach(activity => {
      let actExec = new WorkflowActivityExecution(activity);
      actExec.status = 'Not Started';
      activityExecutions.push(actExec);
    });

    activityExecutions[0].status = 'Started';

    let execution = new WorkflowExecution(this.selectedUserStory, this.selectedWorkflow, activityExecutions);
    
    // this.workflowService.createNewWorkflow(this.workflow);
    // this.workflow = new Workflow([]);
  }

  onCancel() {
    this.router.navigateByUrl('');
  }





}
