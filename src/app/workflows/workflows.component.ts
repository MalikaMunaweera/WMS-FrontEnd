import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../workflow.service';
import { Workflow } from '../Models/workflow';

@Component({
  selector: 'app-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {

  allWorkflows: Workflow[];

  //filters
  activeFilter: any = { isActive: true };

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {

    this.workflowService.getAllWorkflows().subscribe(data => {
      console.log('data is called ', data)
      this.allWorkflows = data;
    });

  }

}
