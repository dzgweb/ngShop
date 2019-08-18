// import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

// import { CoreModule } from '../core.module';
import { GeneratorService } from './generator.service';

export const GeneratorS = new InjectionToken<any[]>('GeneratorS');

export function GeneratorFactoryService(n: number) {
  return (data: GeneratorService): string =>
    data.getRandomSimbol(n);
}


// export function DataTopNFactory(take: number) {
//   return (data: DataService): any[] =>
//     data
//       .getAllData()
//       .sort((a, b) => b - a)
//       .filter((elem, index) => {
//         return index < take;
//       });
// }
