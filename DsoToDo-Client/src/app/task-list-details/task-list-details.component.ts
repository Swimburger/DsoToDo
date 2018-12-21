import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list-details',
  templateUrl: './task-list-details.component.html',
  styleUrls: ['./task-list-details.component.sass']
})
export class TaskListDetailsComponent implements OnInit {
  @Input() taskList: any;
  @Output() onSaveClick: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();
  originalTaskList: any;

  constructor() { }

  ngOnInit() {
    this.originalTaskList = this.copy(this.taskList);
  }

  raiseOnSaveClick(taskList): void {
    this.onSaveClick.emit({ taskList });
  }

  cancelEdits(): void {
    this.taskList = this.copy(this.originalTaskList);
  }

  addTask(taskList) {
    taskList.tasks.push({ title: "", completed: false });
  }

  deleteTask(taskList, taskListIndex) {
    taskList.tasks.splice(taskListIndex, 1);
  }

  raiseOnDeleteClick(taskList): void {
    this.onDeleteClick.emit({ taskList });
  }

  copy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
