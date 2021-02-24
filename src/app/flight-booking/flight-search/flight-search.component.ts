import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flight } from '../../entities/flight';
import { DummyFlightService, FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  // providers: [
  //   {
  //     provide: FlightService,
  //     useClass: DummyFlightService
  //   }
  // ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];

  basket: object = {
    "3": true,
    "5": true
  };
  selectFlight: Flight;

  constructor(private flightService: FlightService) {}

  ngOnInit() {
  }

  search() {

    if (!this.from || !this.to) {
      return;
    }

    this.flightService
      .find(this.from, this.to)
      .subscribe((flights: Flight[]) => {
        this.flights = flights;
      });

  }

}
