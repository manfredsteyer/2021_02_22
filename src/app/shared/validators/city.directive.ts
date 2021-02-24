import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [ {
    provide: NG_VALIDATORS,
    useExisting: CityDirective,
    multi: true }
  ]
})
export class CityDirective implements Validator {

  @Input() validCities;

  validate(control: AbstractControl): ValidationErrors {
    const currentValue = control.value;

    if(!this.validCities.find(c => c == currentValue)) {
      return {
        city: true,
        wrongCity: currentValue,
        allowedCities: this.validCities
      };
    }

    return null;
  }

}
