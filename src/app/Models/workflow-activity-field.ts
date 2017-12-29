import { WorkflowActivityFieldType } from "./workflow-activity-field-type";
import { WorkflowActivity } from "./workflow-activity";

export class WorkflowActivityField {
    public id: number;
    public type: WorkflowActivityFieldType;
    public value: any;

    constructor(fieldType: WorkflowActivityFieldType) {
        this.type = fieldType;
    }
}
