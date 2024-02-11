import { AbstractControl, ValidatorFn } from '@angular/forms';

export const VALIDATE_MOBILE = '(5)[0-9]{8}';
export const VALIDATE_PHONE = '[0-9]+';
export const VALIDATE_ID_NUMBER = '^\\d{11}$';

export const VALIDATE_URL =
  /^(https?:\/\/)?(www\.[\da-z\.-]+)\.([a-z\.]{2,})([\/\w \.-]*)*\/?$/;

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const isValid = VALIDATE_URL.test(control.value);
    return isValid ? null : { invalidUrl: { value: control.value } };
  };
}
