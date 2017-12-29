import { Injectable } from '@angular/core';
import { User } from './Models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  private loggedInUser: User;

  constructor(private http: HttpClient) {

    if (this.loggedInUser == undefined) {

      this.getUserByName('Amanda').subscribe(user => { this.loggedInUser = user });

    }
  }

  getLoggedInUser(): Observable<User> {

    return Observable.create(observer => {
      if (this.loggedInUser == undefined) {
        this.getUserByName('Amanda').subscribe(user => {
          this.loggedInUser = user;
          // console.log(this.loggedInUser);
          observer.next(this.loggedInUser);
          observer.complete();
        });
      } else {
        observer.next(this.loggedInUser);
        observer.complete();
      }

    });
  }

  changeUser(userName: string): Observable<boolean> {

    return Observable.create(observer => {
      this.getUserByName(userName).subscribe(data => {
        if (data) {
          this.loggedInUser = data;
          observer.next(true);
        }
        observer.complete();
      })
    });

  }

  getUserByName(userName: string): Observable<User> {

    return this.http.get<User>(environment.apiRoot + 'users/GetUserByFirstName?firstName=' + userName).map(user => user);

  }

}
