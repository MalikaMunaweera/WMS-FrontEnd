import { Workflow } from "./workflow";
import { UserStory } from "./user-story";
import { User } from "./user";
import { WorkflowActivityExecution } from "./workflow-activity-execution";

export class WorkflowExecution {

    public id: number;
    public userStory: UserStory;
    public workflow: Workflow;
    public startDate: Date;
    public status: string;
    public initiatedBy: User;
    public progress: number;
    public endDate: Date;
    public activityExecutions: WorkflowActivityExecution[];

    constructor(userStory: UserStory, workflow: Workflow, activityExecutions: WorkflowActivityExecution[]) {
        this.userStory = userStory;
        this.workflow = workflow;
        this.activityExecutions = activityExecutions;
    }

}
