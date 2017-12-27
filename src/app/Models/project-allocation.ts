import { Project } from "./project";
import { User } from "./user";

export class ProjectAllocation {
    public id: number;
    public project: Project;
    public employee: User;
    public role: string;
}
