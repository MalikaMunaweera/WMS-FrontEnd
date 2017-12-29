import { Component, OnInit } from '@angular/core';
import { UserStory } from '../Models/user-story';
import { User } from '../Models/user';
import { Project } from '../Models/project';
import { UserStoryService } from '../user-story.service';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-story',
  templateUrl: '../create-user-story/create-user-story.component.html',
  styleUrls: ['../create-user-story/create-user-story.component.scss']
})
export class EditUserStoryComponent implements OnInit {

  cardTitle: string = 'Edit User Story';
  btnText: string = 'Save';
  userStory: UserStory;
  loggedInUser: User;
  projects: Project[];
  selectedProject : Project;

  constructor(private userStoryService: UserStoryService, private projectService: ProjectService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    this.projectService.geAllProjects().subscribe(data => {
      this.projects = data;

      this.userStory = this.userStoryService.getEditModerUserStory();
      console.log('US: ', this.userStory);

      this.selectedProject = this.projects.find(x => x.id == this.userStory.project.id);
      console.log('US: ', this.userStory);

    });

    this.userService.getLoggedInUser().subscribe(data => {
      this.loggedInUser = data;
    });

  }

  onSubmit() {

    this.userStory.modifiedBy = this.loggedInUser;

    this.userStoryService.updateUserStory(this.userStory).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('UserStories');
      }
    });

  }

  onCancel() {

    this.router.navigateByUrl('UserStories');

  }


}
