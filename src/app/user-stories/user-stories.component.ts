import { Component, OnInit } from '@angular/core';
import { UserStory } from '../Models/user-story';
import { UserStoryService } from '../user-story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
  styleUrls: ['./user-stories.component.scss']
})
export class UserStoriesComponent implements OnInit {

  allUserStories: UserStory[];

  //filters
  newFilter: any = { approvalStatus: 'New' };
  approvedFilter: any = { approvalStatus: 'Approved' };
  rejectedFilter: any = { approvalStatus: 'Rejected' };
  processingFilter: any = { approvalStatus: 'Processing' };

  constructor(private userStoryService: UserStoryService, private router: Router) { }

  ngOnInit() {

    this.userStoryService.getAllUserStories().subscribe(data => {
      console.log('data is called ', data)
      this.allUserStories = data;
      console.log('all U.s: ', this.allUserStories)
    });

  }

  edit(userStory) {

    this.userStoryService.setEditModerUserStory(userStory);   
    this.router.navigateByUrl('EditUserStory');
    
  }

}
