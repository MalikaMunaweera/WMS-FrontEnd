import { Injectable } from '@angular/core';
import { WorkflowActivity } from './Models/workflow-activity';
import { WorkflowActivityType } from './Models/workflow-activity-type';
import { WorkflowActivityFieldType } from './Models/workflow-activity-field-type';
import { Workflow } from './Models/workflow';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class WorkflowService {

  editModeWorkflow: Workflow;
  allActivityTypes: WorkflowActivityType[];

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

    if (this.allActivityTypes == undefined) {
      this.http.get<WorkflowActivityType[]>(environment.apiRoot + 'WorkFlows/GetActivityTypes').subscribe(data => {
        this.allActivityTypes = data;
      });
    }

  }

  getNewWorkflowActivity(activityTypeId: number): WorkflowActivity {

    let activityType = this.allActivityTypes.find(x => x.id == activityTypeId);
    let wfa = new WorkflowActivity(activityType);

    wfa.id = 0;
    wfa.fields.forEach(field => {
      field.id = 0;
    });

    return wfa;

  }

  createNewWorkflow(newWorkflow: Workflow): Observable<any> {

    console.log('The w : ', newWorkflow);
    return this.http.post(environment.apiRoot + 'Workflows/AddWorkflow', newWorkflow, this.httpOptions).map(response => response);

  }

  getAllWorkflows(): Observable<any> {

    return this.http.get<Workflow[]>(environment.apiRoot + 'workflows/GetWorkflows').map(response => response);

  }

  getEditModeWorkflow(): Workflow {

    return this.editModeWorkflow;

  }

  setEditModeWorkflow(workflow: Workflow) {

    this.editModeWorkflow = workflow;

  }

  getWorkflowsByActive(isActive: boolean): Observable<any> {

    return this.http.get<Workflow[]>(environment.apiRoot + 'WorkFlows/GetWorkFlowsByStatus?isActive=' + isActive).map(response => response);

  }

}
