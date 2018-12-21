import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list-details',
  templateUrl: './task-list-details.component.html',
  styleUrls: ['./task-list-details.component.sass']
})
export class TaskListDetailsComponent implements OnInit {
  @Input() taskList: any;
  @Output() onDeleteClick: EventEmitter<any> = new EventEmitter();
  @Output() onTaskChecked: EventEmitter<any> = new EventEmitter();
  @Output() onTaskUnChecked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  raiseOnDeleteClick(event: any, taskList): void {
    event.preventDefault();
    this.onDeleteClick.emit({ taskList });
  }

  raiseOnTaskChecked(event: any, taskList, taskIndex): void {
    event.preventDefault();
    this.onTaskChecked.emit({ taskList, taskIndex });
  }

  raiseOnTaskUnChecked(event: any, taskList, taskIndex): void {
    event.preventDefault();
    this.onTaskUnChecked.emit({ taskList, taskIndex });
  }
}
