/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { DummyFlightService, FlightService } from './flight.service';
import { of } from 'rxjs';


const dummy = {
  search() {
    return of([{}, {}, {}]);
  }
};

fdescribe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;
  let flightService: FlightService;

  beforeEach(waitForAsync(() => {
    // ----- Arrange -----
    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpClientModule,
        RouterModule
      ],
      declarations: [ ],
      // Global
      providers: [
        {
          provide: FlightService,
          useClass: DummyFlightService
        }
      ]
    })
    .compileComponents();

    // Provider lokal überschreiben
    TestBed.overrideComponent(FlightSearchComponent, {
      add: {
        providers: [
          {
            provide: FlightService,
            useClass: DummyFlightService
            // useValue: dummy
          }
        ]
      }
    });

  }))
  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


    // --- Spy aufsetzen ---
    // Global
    // flightService = TestBed.inject(FlightService);
    // Lokal
    flightService = fixture.debugElement.injector.get(FlightService);
    spyOn(flightService, 'find').and.callThrough();

  });

  it('should not have selected flights initially', () => {

    // ----- Act -----
    component.from = 'Graz';
    component.to = 'HAM';

    // ----- Assert -----
    expect(component.selectFlight).toBeUndefined();
  });


  it('should not search for flights w/o from and to', () => {

    // ----- Act -----
    component.from = '';
    component.to = '';
    component.search();

    // ----- Assert -----
    expect(component.flights.length).toBe(0);
    expect(flightService.find).not.toHaveBeenCalled();
  });

  it('should search for flights when from and to given', () => {

    // ----- Act -----
    component.from = 'Graz';
    component.to = 'HAM';
    component.search();

    // ----- Assert -----
    expect(component.flights.length).toBe(3);
    expect(flightService.find).toHaveBeenCalled();
  });

});
