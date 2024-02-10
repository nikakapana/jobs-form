import {Component, Input} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CalendarComponent} from "../calendar/calendar.component";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {


  currentDate = new Date()

    public searchForm: FormGroup = new FormGroup({
        search: new FormControl(null),
        positionIds: new FormControl(null),
        departmentIds: new FormControl(null),
    });
    date?: any = new Date();
    dateFormat = 'yyyy/MM/dd';
    dayDetail = false;

  constructor(private modal: NzModalService,) {}

    dateRangeFilter: FormGroup = new FormGroup({
        startDate: new FormControl(null),
        endDate: new FormControl(null),
    });
  search?: string;


  openCalendar() {
    this.modal.create({
      nzTitle: 'Calendar',
      nzContent: CalendarComponent,
      nzWidth: '400px',})
  }

}
