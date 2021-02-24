import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {

  flightId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    const initialFlightId = route.snapshot.params.flightId;
    console.log('Initial FlightId: ' + initialFlightId);

    route.params.subscribe(params => {
      this.flightId = params.flightId;
      console.log('Param Flight Id Changed to ' + this.flightId);
    });

   }

  ngOnInit() {
  }

  next() {
    const nextFlightId = this.flightId + 1;
    this.router.navigate(['/flight-booking/flight-edit/', nextFlightId]);
  }

}
