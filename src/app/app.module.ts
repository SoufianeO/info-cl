import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GanttComponent } from './components/gantt/gantt.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { FormBuilder, FormsModule } from '@angular/forms';

import { ChartsComponent } from './components/charts/charts.component';
import { NgGanttEditorModule } from 'ng-gantt';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    DashboardComponent,
    GanttComponent,
    SchedulerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgGanttEditorModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
