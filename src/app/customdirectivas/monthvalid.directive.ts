import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';



@Directive({
  selector: '[appMonthvalid]',
  providers: [{provide: NG_VALIDATORS, useExisting: MonthvalidDirective, multi: true}]
})
export class MonthvalidDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any}  | null {
    const inputValue: number = control.value;
    return inputValue>=0 &&  inputValue<=12 ? null:{ 'validMonth': true } ;
  }
}

