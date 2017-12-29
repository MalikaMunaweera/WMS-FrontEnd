import { Workflow } from "./workflow";
import { WorkflowActivityType } from "./workflow-activity-type";
import { WorkflowActivityField } from "./workflow-activity-field";

export class WorkflowActivity {

    public id: number;
    public type: WorkflowActivityType;
    public name: string;
    public fields: WorkflowActivityField[];
    public activityOrderNumber: number;

    constructor(activityType: WorkflowActivityType) {
        this.type = activityType;
        this.fields = [];
        
        activityType.fieldTypes.forEach(fieldType => {
            var activityField = new WorkflowActivityField(fieldType);
            this.fields.push(activityField);
        });
    }

}
