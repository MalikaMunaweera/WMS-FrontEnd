import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserStoryComponent } from './create-user-story/create-user-story.component';
import { CreateWorkflowComponent } from './create-workflow/create-workflow.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'CreateUserStory',
    component: CreateUserStoryComponent
  },
  {
    path: 'CreateWorkflow',
    component: CreateWorkflowComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
