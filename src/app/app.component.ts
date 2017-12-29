import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Workflow Management System';

  user: User = new User();

  constructor(private userService: UserService) {

    userService.getLoggedInUser().subscribe(data => {
      this.user = data;
      // console.log(this.user);
    });

  }

  refresh() {
    console.log(this.user);
    this.userService.getLoggedInUser().subscribe(data => {
      this.user = data
      // console.log(this.user);
    });

  }

}
