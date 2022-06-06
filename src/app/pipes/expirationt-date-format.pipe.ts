import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expirationtDateFormat'
})
export class ExpirationtDateFormatPipe implements PipeTransform {

  transform(value: Date | string | undefined): string {
    const currentDate: Date = new Date();
    if (value === undefined) {
      return "Undefined"
    }
    if (typeof value === "string") {
      value = new Date(value);
    }

    const timeDiff = Math.floor(value.getTime() - new Date().getTime());
    if (timeDiff <= 0) {
      return "No longer available"
    }

    const daysAmount = Math.floor(timeDiff / (60 * 60 * 1000) / 24);
    const hoursAmount = Math.floor(timeDiff / (60 * 60 * 1000) % 24);
    return daysAmount + " days " + hoursAmount + " hours";
  }

}
