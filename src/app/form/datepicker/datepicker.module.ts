import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

@NgModule({
    declarations: [DatepickerComponent],
    imports: [
      CommonModule,
      NzFormModule,
      NzInputModule,
      NzDatePickerModule,
      FormsModule,],
    exports: [DatepickerComponent],
})
export class DatepickerModule {}
