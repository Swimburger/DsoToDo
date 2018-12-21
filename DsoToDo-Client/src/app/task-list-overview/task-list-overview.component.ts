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
    this.tasksApi.getTaskLists()
      .subscribe((data) => {
        this.taskLists = data;
      }, (err) => {
        console.log(err);
      });
  }

  checkTask(taskList, taskIndex) {
    let [finishedTasks] = taskList.tasks.splice(taskIndex, 1);
    taskList.finishedTasks.push(finishedTasks);
    this.tasksApi.updateTaskList(taskList.id, taskList)
      .subscribe(() => {
        this.getTaskLists();
      }, (err) => {
        console.log(err);
      });
  }

  unCheckTask(taskList, taskIndex) {
    let [unFinishedTasks] = taskList.finishedTasks.splice(taskIndex, 1);
    taskList.tasks.push(unFinishedTasks);
    this.tasksApi.updateTaskList(taskList.id, taskList)
      .subscribe(() => {
        this.getTaskLists();
      }, (err) => {
        console.log(err);
      });
  }

  deleteTaskList(taskList) {
    this.tasksApi.deleteTaskList(taskList.id)
      .subscribe(res => {
        this.getTaskLists();
      }, (err) => {
        console.log(err);
      });
  }
}
