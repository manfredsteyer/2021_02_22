import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): string {
    
    //;console.debug('city-pipe');
    // console.count('city-pipe');

    let long, short;

    switch(value) {
      case 'Graz':
        long = 'Flughagen Graz Thalerhof';
        short = 'GRZ';
        break;
      case 'Hamburg':
        long = 'Airport Hamburg Fulsbüttel -- Helmut Schmidt';
        short = 'HAM';
        break;
      default:
        long = short = value;
    }

    if (fmt === 'short') {
      return short; 
    }
    return long;

  }

}
