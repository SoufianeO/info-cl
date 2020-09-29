import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GanttComponent } from './components/gantt/gantt.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'gantt', component:GanttComponent},
  {path:'scheduler', component:SchedulerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
