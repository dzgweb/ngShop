import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, key: string, isDesc: boolean = true): any {
    if (!array || !Array.isArray(array) || !key) {
      // Если не можем преобразовать, то вернуть то, что пришло
      return array;
    }

    const ascending = (a, b) => {
      const aVal = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
      const bVal = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

      if (aVal > bVal) {
        return 1;
      } else if (aVal < bVal) {
        return -1;
      }
      return 0;
    };

    const descending = (a, b) => {
      const aVal = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key];
      const bVal = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key];

      if (aVal > bVal) {
        return -1;
      } else if (aVal < bVal) {
        return 1;
      }
      return 0;
    };

    return array.sort(isDesc ? descending : ascending);
  }

}
