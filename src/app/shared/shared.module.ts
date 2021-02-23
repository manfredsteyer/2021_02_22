import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CityPipe],
    providers: [],
    exports: [CityPipe, FormsModule],
})
export class SharedModule { }

