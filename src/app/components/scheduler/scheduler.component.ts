import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule'

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {

  public eventData: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Board Meeting',
        StartTime: new Date(2018, 10, 30, 9, 0),
        EndTime: new Date(2018, 10, 30, 11, 0)
    },
        {
            Id: 2,
            Subject: 'Training session on JSP',
            StartTime: new Date(2018, 10, 30, 15, 0),
            EndTime: new Date(2018, 10, 30, 17, 0)
        },
        {
            Id: 3,
            Subject: 'Sprint Planning with Team members',
            StartTime: new Date(2018, 10, 30, 9, 30),
            EndTime: new Date(2018, 10, 30, 11, 0)
        }]
}

  constructor() { }

  ngOnInit(): void {
  }

}
