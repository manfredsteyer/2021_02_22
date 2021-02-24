import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: RoundTripDirective,
    multi: true
  }]
})
export class RoundTripDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    let formGroup = control as FormGroup;

    if(formGroup.controls.from && formGroup.controls.to) {
      if(formGroup.controls.from.value === formGroup.controls.to.value) {
        return { roundTrip: true };
      }
    }

    return null;

  }

}
