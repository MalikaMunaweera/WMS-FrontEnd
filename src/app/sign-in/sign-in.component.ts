import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private router: Router, private userService: UserService, private app: AppComponent) { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.userName != undefined && this.userName != '') {

      this.userService.changeUser(this.userName).subscribe(data => {
        console.log('in component : ', data);
        if (data) {
          this.router.navigateByUrl('');
          this.app.refresh();
        }
      });

    }
  }

}
