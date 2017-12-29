import { User } from "./user";
import { WorkflowActivity } from "./workflow-activity";

export class Workflow {

    public id: number;
    public version: number;
    public name: string;
    public isActive: boolean;
    public activities: WorkflowActivity[];
    public createdDate: Date;
    public createdBy: User; 

    constructor(activities: WorkflowActivity[]) {
        this.activities = activities;
    }

}
