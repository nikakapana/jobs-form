import { Component, Input } from '@angular/core';
import { DefaultValueAccessor, InputBase } from '../../common';

let nextUniqueId = 0;

@Component({
  selector: 'dga-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [DefaultValueAccessor],
})
export class DatepickerComponent extends InputBase {
  @Input() label: string | undefined;
  @Input() validateStatus = 'success';
  @Input() errorMessage: string | null = null;
  @Input() placeholder = '00/00/0000';
  @Input() formControlName: string | undefined;
  @Input() nzShowTime = false;
  @Input() nzFormat = 'dd/MM/yyyy';
  @Input() allowClear: boolean = true;
  @Input() nzDisabledDate?: Date;
  public date: any = null;

  private uniqueId = `wa-datepicker-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }

  disableFutureDates = (nzDisabledDate: Date): boolean => {
    if (this.nzDisabledDate) {
      const currentDate = new Date();
      return nzDisabledDate > currentDate;
    }
    return false;
  };
}
