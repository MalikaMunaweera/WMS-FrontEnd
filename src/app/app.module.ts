import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { UserStoriesComponent } from './user-stories/user-stories.component';
import { UserStoryService } from './user-story.service';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';
import { WorkflowService } from './workflow.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateUserStoryComponent,
    UserStoriesComponent,
    CreateWorkflowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2OrderModule,
    FormsModule
  ],
  providers: [UserStoryService, WorkflowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
