import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { TaskListOverviewComponent } from './task-list-overview/task-list-overview.component';
import { TaskListDetailsComponent } from './task-list-details/task-list-details.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListOverviewComponent },
  { path: 'tasks/:id', component: TaskListDetailsComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
