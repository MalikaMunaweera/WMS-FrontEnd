import { WorkflowActivityFieldType } from "./workflow-activity-field-type";
import { WorkflowActivity } from "./workflow-activity";

export class WorkflowActivityField {
    public type: WorkflowActivityFieldType;
    //public activity: WorkflowActivity;
    public value: any;

    constructor(fieldType: WorkflowActivityFieldType) {
        this.type = fieldType;
    }
}
