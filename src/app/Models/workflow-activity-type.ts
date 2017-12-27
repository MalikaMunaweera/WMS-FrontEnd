import { WorkflowActivityFieldType } from "./workflow-activity-field-type";

export class WorkflowActivityType {
    public id: number;
    public name: string;
    public fieldTypes: WorkflowActivityFieldType[];

    constructor(id: number, name: string, activityFieldTypes: WorkflowActivityFieldType[]){
        this.id = id;
        this.name = name;
        this.fieldTypes = activityFieldTypes;
    }
}
