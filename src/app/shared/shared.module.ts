import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';
import { CityDirective } from './validators/city.directive';
import { RoundTripDirective } from './validators/roundTrip.directive';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CityPipe, CityDirective, RoundTripDirective],
    providers: [],
    exports: [CityPipe, CityDirective, RoundTripDirective, FormsModule],
})
export class SharedModule { }

