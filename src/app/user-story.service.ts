import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStory } from './Models/user-story';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'q';
import 'rxjs/add/operator/map';

@Injectable()
export class UserStoryService {

  allUserStories: UserStory[];
  results: object;

  constructor(private http: HttpClient) { }

  getAllUserStories():Observable<object> {
    //return this.allUserStories;

    // Make the HTTP request:
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1').map(response => response);
   
  }

}
