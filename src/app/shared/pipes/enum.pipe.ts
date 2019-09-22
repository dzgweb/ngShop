import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToString'
})
export class EnumPipe implements PipeTransform {

  transform(value: any, enumType: any): any {
    return enumType[value];
  }
}
