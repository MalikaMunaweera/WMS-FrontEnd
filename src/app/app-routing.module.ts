import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { EditUserStoryComponent } from './edit-user-story/edit-user-story.component';
import {WorkflowExecutionComponent} from './workflow-execution/workflow-execution.component';
import {WorkflowActivityExecutionComponent} from './workflow-activity-execution/workflow-activity-execution.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'UserStories/CreateUserStory',
    component: CreateUserStoryComponent
  },
  {
    path: 'Workflows/CreateWorkflow',
    component: CreateWorkflowComponent
  },
  {
    path: 'SignIn',
    component: SignInComponent
  },
  {
    path: 'UserStories',
    component: UserStoriesComponent
  },
  {
    path: 'Workflows',
    component: WorkflowsComponent
  },
  {
    path: 'EditUserStory',
    component: EditUserStoryComponent
  },
  {
    path: 'WorkflowExecution',
    component: WorkflowExecutionComponent
  },
  {
    path: 'Validation',
    component: WorkflowActivityExecutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
