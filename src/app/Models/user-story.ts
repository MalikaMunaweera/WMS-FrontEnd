import { User } from "./user";
import { Project } from "./project";

export class UserStory {

    constructor() { }

    public id: number;
    public name: string;
    public userType: string;
    public activity: string;
    public businessValue: string;
    public acceptanceCriteria: string;
    public approvalStatus: string;
    public project: Project;
    public createdOn: Date;
    public createdBy: User;
    public lastModified: Date;
    public lastModifiedBy: User;
}
