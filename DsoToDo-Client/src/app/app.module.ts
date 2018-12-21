import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TaskListOverviewComponent } from './task-list-overview/task-list-overview.component';
import { TaskListDetailsComponent } from './task-list-details/task-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TaskListOverviewComponent,
    TaskListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
