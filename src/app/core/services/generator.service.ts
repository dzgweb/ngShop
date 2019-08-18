import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  generateRandomStringLC(stringLength: number) {
    let randomString = '';
    let randomAscii: number;
    const asciiLow = 97;
    const asciiHigh = 122;
    for ( let i = 0; i < stringLength; i++ ) {
        randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
        randomString += String.fromCharCode(randomAscii);
    }
    return randomString;
 }

 generateRandomStringUC(stringLength: number) {
  let randomString = '';
  let randomAscii: number;
  const asciiLow = 65;
  const asciiHigh = 90;
  for ( let i = 0; i < stringLength; i++ ) {
      randomAscii = Math.floor((Math.random() * (asciiHigh - asciiLow)) + asciiLow);
      randomString += String.fromCharCode(randomAscii);
  }
  return randomString;
}

  generateRandomNumber() {
    const numLow = 1;
    const numHigh = 9;
    return Math.floor((Math.random() * (numHigh - numLow)) + numLow);
  }

  getRandomSimbol(n: number) {
    return this.generateRandomStringLC(n * 0.5) + this.generateRandomStringUC(n * 0.4) + this.generateRandomNumber();
  }
}

