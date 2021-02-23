import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('constructor', this.selected, this.item)
  }

  ngOnInit(): void {
    // setTimeout(() => this.selectedChange.next(true),0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.selected, this.item)


    if (changes['selected']) {
      console.debug('\tselected changed');
    }
    if (changes['item']) {
      console.debug('\titem changed');
    }
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy');
  }

 

  select(): void {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
