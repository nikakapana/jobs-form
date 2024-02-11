import { Component, Input, OnInit } from '@angular/core';
import { DefaultValueAccessor, InputBase } from '../../common';

let nextUniqueId = 0;

@Component({
  selector: 'dga-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [DefaultValueAccessor],
})
export class TextareaComponent extends InputBase {
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined = '';
  @Input() rows: number = 3;
  @Input() errorMessage: string | null = null;

  private uniqueId = `wa-textarea-${++nextUniqueId}`;
  @Input() id: string = this.uniqueId;

  public get inputId(): string {
    return `${this.id || this.uniqueId}`;
  }
}
