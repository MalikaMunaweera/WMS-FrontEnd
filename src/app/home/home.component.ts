import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  executionOntimeIcon: string = 'fa fa-check-circle w3-text-green w3-large';
  executionDelayedIcon: string = 'fa fa-exclamation-circle w3-text-yellow w3-large';
  executionCriticalIcon: string = 'fa fa-times-circle w3-text-red w3-large';

  currentExecutions = [];

  execution1 = {
    name: 'UserStory123',
    completetion: 90,
    status: 3,
    dueDate: new Date('2017-12-31'),
    icon: this.executionOntimeIcon
  }

  execution2 = {
    name: 'UserStory456',
    completetion: 50,
    status: 2,
    dueDate: new Date('2017-12-20'),
    icon: this.executionDelayedIcon
  }

  execution3 = {
    name: 'UserStory789',
    completetion: 10,
    status: 1,
    dueDate: new Date('2017-12-10'),
    icon: this.executionCriticalIcon
  }

  constructor() { }

  ngOnInit() {

    this.currentExecutions.push(this.execution1);
    this.currentExecutions.push(this.execution2);
    this.currentExecutions.push(this.execution3);

  }

  changePage(menuItem:string) {

    
  }

}
