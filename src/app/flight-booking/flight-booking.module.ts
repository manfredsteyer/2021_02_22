import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule, 
    // FormsModule, -- kommt jetzt über SharedModule --+ 
    SharedModule // <----------------------------------+
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  providers: [
      // HINT: Refactored to new Syntax with @Injectable(...)
      // {
      //    provide: FlightService,
      //    // useClass: DummyFlightService
      //    useFactory: (http: HttpClient) => {
      //       if (DEBUG) {
      //          return new DummyFlightService();
      //       } else {
      //          return new DefaultFlightService(http);
      //       }
      //    },
      //    deps: [HttpClient]
      // }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
