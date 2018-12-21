import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-details',
  templateUrl: './task-list-details.component.html',
  styleUrls: ['./task-list-details.component.sass']
})
export class TaskListDetailsComponent implements OnInit {
  @Input() taskList: any;
  constructor() { }

  ngOnInit() {
  }

}
