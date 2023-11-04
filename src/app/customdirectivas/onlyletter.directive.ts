import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appOnlyletter]',
  providers: [{provide: NG_VALIDATORS, useExisting: OnlyletterDirective, multi: true}]
})
export class OnlyletterDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    const inputValue: string = control.value;
    const hasNumbers: boolean = /\d/.test(inputValue);
    return hasNumbers ? { 'containsNumbers': true } : null;
  }
}
