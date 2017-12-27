import { Component, OnInit } from '@angular/core';
import { UserStory } from '../Models/user-story';
import { UserStoryService } from '../user-story.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.scss']
})
export class CreateUserStoryComponent implements OnInit {

  cardTitle: string = 'New User Story';
  btnText: string = 'Create';
  userStoryId: number = 1;
  TheUserStory: UserStory = new UserStory();

  baliyak: object = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "ABD"
  }

  userStories = [];

  projects = ['Project Apollo', 'Artemis III',
    'Marvel Green United', 'Matrix Blue']

  constructor(private userStoryService: UserStoryService, private http: HttpClient) {

  }

  ngOnInit() {
    this.TheUserStory.id = this.userStoryId;
  }

  onSubmit() {
    this.userStories.push(this.TheUserStory);
    this.userStoryId++;
    this.TheUserStory = new UserStory();
    this.TheUserStory.id = this.userStoryId;
  }

  onCancel() {
    this.TheUserStory = new UserStory();
    this.TheUserStory.id = this.userStoryId;

    this.userStoryService.getAllUserStories().subscribe(data => {
        console.log('data is called ' + data)
        this.baliyak = data;    
      });

    console.log('At the end : ' + this.baliyak);
  }
}
