import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStory } from './Models/user-story';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class UserStoryService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private editModeUserStory: UserStory;

  constructor(private http: HttpClient) { }

  getAllUserStories(): Observable<any> {

    return this.http.get<UserStory[]>(environment.apiRoot + 'userStories/GetUserstories').map(response => response);

  }

  addUserStory(newUserStory: UserStory): Observable<any> {

    console.log('The us : ', newUserStory);
    return this.http.post(environment.apiRoot + 'userStories/AddUserstory', newUserStory, this.httpOptions).map(response => response);

  }

  setEditModerUserStory(userStory: UserStory) {

    this.editModeUserStory = userStory;

  }

  getEditModerUserStory(): UserStory {

    return this.editModeUserStory;

  }

  updateUserStory(userStory: UserStory) {

    console.log('The us : ', userStory);
    return this.http.post(environment.apiRoot + 'userStories/UpdateUserstory', userStory, this.httpOptions).map(response => response);

  }

  getUserStoriesByStatus(status: string): Observable<any> {

    return this.http.get<UserStory[]>(environment.apiRoot + 'userStories/GetUserStoriesByStatus?status=' + status).map(response => response);

  }
}
