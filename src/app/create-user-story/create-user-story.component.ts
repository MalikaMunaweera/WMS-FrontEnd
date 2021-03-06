import { Component, OnInit } from '@angular/core';
import { UserStory } from '../Models/user-story';
import { UserStoryService } from '../user-story.service';
import { Project } from '../Models/project';
import { ProjectService } from '../project.service';
import { User } from '../Models/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.scss']
})
export class CreateUserStoryComponent implements OnInit {

  cardTitle: string = 'Create a New User Story';
  btnText: string = 'Create';
  userStory: UserStory = new UserStory();
  loggedInUser: User;
  selectedProject : Project;
  projects: Project[];

  constructor(private userStoryService: UserStoryService, private projectService: ProjectService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    this.projectService.geAllProjects().subscribe(data => {
      this.projects = data;
    });

    this.userService.getLoggedInUser().subscribe(data => {
      this.loggedInUser = data;
    })

    this.userStory = new UserStory();

  }

  onSubmit() {

    this.userStory.id = 0;
    this.userStory.approvalStatus = 'New';
    this.userStory.createdBy = this.loggedInUser;
    this.userStory.modifiedBy = this.loggedInUser;
    this.userStory.project = this.selectedProject;

    console.log('project', this.userStory.project);
    this.userStoryService.addUserStory(this.userStory).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('UserStories');
      }
    });

  }

  onCancel() {
    this.router.navigateByUrl('UserStories');
  }
}
