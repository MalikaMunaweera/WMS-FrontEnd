import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './Models/project';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class ProjectService {

  private projects: Project[];

  constructor(private http: HttpClient) { 
  }

  geAllProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(environment.apiRoot + 'projects/GetProjects').map(data => data);

  }

}
