import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../entities/flight';


@Injectable()
export class DummyFlightService implements FlightService {
  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 7, from: 'Graz', to: 'Flagranti', date: '2021-02-22T19:00', delayed: true },
      { id: 8, from: 'Graz', to: 'Kognito', date: '2021-02-22T19:30', delayed: true },
      { id: 9, from: 'Graz', to: 'Mallorca', date: '2021-02-22T19:45', delayed: true },

    ]);
  }

}

@Injectable()
export class DefaultFlightService implements FlightService {

  constructor(private httpClient: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.httpClient.get<Flight[]>(url, {params, headers});
  }

}

@Injectable({
  providedIn: 'root',
  useClass: DefaultFlightService
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
