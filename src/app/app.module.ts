import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { UserStoryService } from './user-story.service';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';
import { WorkflowService } from './workflow.service';
import { UserService } from './user.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProjectService } from './project.service';
import { WorkflowsComponent } from './workflows/workflows.component';
import { EditUserStoryComponent } from './edit-user-story/edit-user-story.component';
import { WorkflowExecutionComponent } from './workflow-execution/workflow-execution.component';
import { WorkflowExecutionService } from './workflow-execution.service';
import { WorkflowActivityExecutionComponent } from './workflow-activity-execution/workflow-activity-execution.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserStoryComponent,
    UserStoriesComponent,
    CreateWorkflowComponent,
    SignInComponent,
    WorkflowsComponent,
    EditUserStoryComponent,
    WorkflowExecutionComponent,
    WorkflowActivityExecutionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2OrderModule,
    FormsModule,
    Ng2FilterPipeModule
  ],
  providers: [UserStoryService, WorkflowService, UserService, ProjectService, WorkflowExecutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
