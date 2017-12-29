import { Component, OnInit } from '@angular/core';
import { Workflow } from '../Models/workflow';
import { WorkflowActivity } from '../Models/workflow-activity';
import { WorkflowActivityType } from '../Models/workflow-activity-type';
import { WorkflowService } from '../workflow.service';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-workflow',
  templateUrl: './create-workflow.component.html',
  styleUrls: ['./create-workflow.component.scss']
})
export class CreateWorkflowComponent implements OnInit {

  buttonText = 'Create';
  workflow = new Workflow([]);
  loggedInUser: User;

  constructor(private workflowService: WorkflowService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.userService.getLoggedInUser().subscribe(data => {
      this.loggedInUser = data;
    })

  }

  addActivity(activtyType: number) {

    this.workflow.activities.push(this.workflowService.getNewWorkflowActivity(activtyType));

  }

  removeActivity(index: number) {

    this.workflow.activities.splice(index, 1);

  }

  onSubmit() {

    this.workflow.id = 0;
    this.workflow.version = 1.0;
    this.workflow.createdBy = this.loggedInUser;
    this.workflow.isActive = true;

    for (let i = 0; i > this.workflow.activities.length; i++) {
      this.workflow.activities[i].activityOrderNumber = i + 1;
    }

    this.workflowService.createNewWorkflow(this.workflow).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('Workflows');
      }
    });

  }

  editVersion() {
    this.workflow = this.workflowService.getEditModeWorkflow();
  }

  onCancel() {
    this.router.navigateByUrl('Workflows');
  }

}
