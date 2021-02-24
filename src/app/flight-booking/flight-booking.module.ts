import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

const FLIGHT_BOOKING_ROUTES: Routes = [{
  path: 'flight-search',
  component: FlightSearchComponent
}, {
  path: 'passenger-search',
  component: PassengerSearchComponent
}, {
  path: 'flight-edit/:flightId',
  component: FlightEditComponent
}]

@NgModule({
  imports: [
    CommonModule,
    // FormsModule, -- kommt jetzt über SharedModule --+
    SharedModule, // <----------------------------------+
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    PassengerSearchComponent,
    FlightEditComponent
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
  ]
})
export class FlightBookingModule { }
