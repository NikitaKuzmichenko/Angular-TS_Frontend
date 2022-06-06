import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number, currencySymbol : string): string {
    return currencySymbol + value.toFixed(2).toString().replace(".", ",");
  }
}
