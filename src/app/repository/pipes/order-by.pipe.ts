import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, order: string, reverse: boolean): Array<any> {
    if (!value) {
      return [];
    }
    if (!order) {
      return value;
    }
    let val = value.sort((a, b) => {
      if (a[order] === b[order]) return 0;
      return a[order] > b[order] ? 1 : -1;
    });
    return !reverse ? val : val.reverse();
  }

}
