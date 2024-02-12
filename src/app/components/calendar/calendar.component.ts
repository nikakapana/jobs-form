import { Component, OnInit } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  currentDay = this.currentDate.getDate();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  weeks: any[] = [];
  weekdays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','sun']
  time$: Observable<string> = interval(1000).pipe(
    map(() =>
      new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    ),
  );

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    let dates = [];
    let date = new Date(this.currentYear, this.currentMonth, 1);
    let firstDayOfMonth = date.getDay() - 1;
    firstDayOfMonth = firstDayOfMonth === -1 ? 6 : firstDayOfMonth;

    date.setDate(date.getDate() - firstDayOfMonth);

    for (let week = 0; week < 6; week++) {
      let weekDates = [];

      for (let day = 0; day < 7; day++) {
        weekDates.push({
          date: new Date(date),
          day: date.getMonth() === this.currentMonth ? date.getDate() : 0,
          isToday: this.isToday(date),
          isWeekend: this.isWeekend(date),
        });
        date.setDate(date.getDate() + 1);
      }
      dates.push(weekDates);
      if (weekDates[6].date.getMonth() !== this.currentMonth) break;
    }
    this.weeks = dates;
  }



  isToday(date: Date): boolean {
    return (
      date.getDate() === this.currentDay &&
      date.getMonth() === this.currentMonth &&
      date.getFullYear() === this.currentYear
    );
  }

  isWeekend(date: Date): boolean {
    let dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }
  getFormattedCurrentDate(): string {
    return this.currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
