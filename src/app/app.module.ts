import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerModule } from './form/datepicker';
import { InputModule } from './form/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SelectModule } from './form/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TextareaModule } from './form/textarea';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, CalendarComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DatepickerModule,
    InputModule,
    NzGridModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    SelectModule,
    NzDividerModule,
    NzSpaceModule,
    NzSwitchModule,
    NzLayoutModule,
    NzModalModule,
    TextareaModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
