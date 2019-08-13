import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, key: string, asc: string): any {
    if (!array || !Array.isArray(array) || !key) {
      return array;
    }

    const arraySort = array.sort((a, b) => {
      if (a.key > b[key]) {
        return 1;
      } else if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });

    return asc === '0' ? arraySort : arraySort.reverse();
  }

}
