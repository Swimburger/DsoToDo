import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list-overview',
  templateUrl: './task-list-overview.component.html',
  styleUrls: ['./task-list-overview.component.sass']
})
export class TaskListOverviewComponent implements OnInit {
  taskLists: any[] = [];
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

  createTaskList(){
    this.tasksApi.addTaskList({
        title: "",
        tasks: []
      }).subscribe((taskList) => {
        this.taskLists.push(taskList);
      }, (err) => {
        console.log(err);
      });
  }

  saveTaskList(taskList) {
    this.tasksApi.updateTaskList(taskList.id, taskList)
      .subscribe((updatedTaskList) => {
        let taskListIndex = this.taskLists.findIndex(t => t.id === taskList.id);
        this.taskLists[taskListIndex] = updatedTaskList;
      }, (err) => {
        console.log(err);
      });
  }

  deleteTaskList(taskList) {
    this.tasksApi.deleteTaskList(taskList.id)
      .subscribe(res => {
        let taskListIndex = this.taskLists.findIndex(t => t.id === taskList.id);
        this.taskLists.splice(taskListIndex, 1);
      }, (err) => {
        console.log(err);
      });
  }
}
