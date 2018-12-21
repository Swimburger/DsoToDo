import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list-overview',
  templateUrl: './task-list-overview.component.html',
  styleUrls: ['./task-list-overview.component.sass']
})
export class TaskListOverviewComponent implements OnInit {

  taskLists: any = [];

  constructor(public tasksApi: TasksService) { }

  ngOnInit() {
    this.getTaskLists();
  }

  getTaskLists() {
    this.taskLists = [];
    this.tasksApi.getTaskLists().subscribe((data: {}) => {
      console.log(data);
      this.taskLists = data;
    });
  }

  delete(id) {
    this.tasksApi.deleteTaskList(id)
      .subscribe(res => {
        this.getTaskLists();
      }, (err) => {
        console.log(err);
      }
      );
  }
}
