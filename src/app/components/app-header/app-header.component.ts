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


  constructor(private modal: NzModalService,) {}




  openCalendar() {
    this.modal.create({
      nzTitle: 'Calendar',
      nzContent: CalendarComponent,
      nzWidth: '800px',})
  }

}
