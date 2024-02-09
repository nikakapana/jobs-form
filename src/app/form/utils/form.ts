import {Injectable} from "@angular/core";
import {FormArray, FormGroup} from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class FormHelper {
  markFormDirty(form: FormGroup | FormArray): void {
    const values = form instanceof FormArray ? form.controls : Object.values(form.controls);
    values.forEach((control) => {
      if (control instanceof FormArray) {
        this.markFormDirty(control);
      } else if (control instanceof FormGroup) {
        this.markFormDirty(control);
      } else {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      }
    });
  }
}
