import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalendarComponent } from '../calendar/calendar.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InputCompareComponent } from '../input-compare/input-compare.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(private modal: NzModalService) {}

  openCalendar() {
    this.modal.create({
      nzTitle: 'Calendar',
      nzContent: CalendarComponent,
      nzWidth: '800px',
    });
  }

  compareComponent() {
    this.modal.create({
      nzTitle: 'comparative',
      nzContent: InputCompareComponent,
      nzWidth: '500px',
      nzData: {
        value1: 'ქონება',
        value2: [
          'ქონება',
          'ქონების პრივატიზება',
          'ქონების გასხვისება',
          'საქონლის გასხვისება',
        ],
      },
    });
  }
}
