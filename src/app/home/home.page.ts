import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  minNumber: number = 0
  maxNumber: number = 100

  generateRandomNumber(minNumber: number, maxNumber: number) {
    if(minNumber >= maxNumber) {
      return 0
    } else {
      return Math.floor(Math.random() * (maxNumber - minNumber - 1) + minNumber)
    }
  }
}