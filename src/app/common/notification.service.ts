import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notification: NzNotificationService) {}

  success(message: string, title: string = '') {
    this.notification.create('success', title, message);
  }

  info(message: string, title: string = '') {
    this.notification.create('info', title, message);
  }

  warning(message: string, title: string = '') {
    this.notification.create('warning', title, message);
  }

  error(message: string, title: string = '') {
    this.notification.create('error', title, message);
  }
}
