import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'class-validator';

@Pipe({
  name: 'kiloFormater'
})
export class KiloFormaterPipe implements PipeTransform {

  transform(value: string | number): string {
    if (isNumber(value)) {
      const n = Number(value)
      if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M'
      if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K'
      return n.toString()
    } else {
      return "Value isn't a number"
    }
  }

}
