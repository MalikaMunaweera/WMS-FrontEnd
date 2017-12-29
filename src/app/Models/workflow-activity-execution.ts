import { WorkflowExecution } from "./workflow-execution";
import { WorkflowActivity } from "./workflow-activity";
import { User } from "./user";

export class WorkflowActivityExecution {

    public id: number;
    public activity: WorkflowActivity;
    public status: string;
    public startDate: Date;      
    public completedDate: Date;
    public outcome : any;
    public comments: string;  

    constructor(activity : WorkflowActivity) {
        this.activity = activity;
    }
}
