import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // Initialized variables
  minNumber: number = 0
  maxNumber: number = 100
  randomNumber: number = 0
  introducedNumber: number = 0
  introducedNumbers: number[] = []
  totalAttempts: number = 5
  hasAttemptsLeft: boolean = true
  hasFoundNumber: boolean = false

  // Resets the game and generates a new number
  generateRandomNumber(minNumber: number, maxNumber: number) {
    this.reset()

    if(minNumber >= maxNumber) {
      return 0
    } else {
      return this.randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber + 1)
    }
  }

  // Validates the number. When 5 attempts have been made or finds the random number, ends the game
  validateNumber(introducedNumber: number, randomNumber: number) {
    this.introducedNumbers.push(introducedNumber)

    if(introducedNumber != randomNumber) {
      this.totalAttempts--
    } else {
      this.hasFoundNumber = true
    }

    if(this.totalAttempts == 0) {
      this.hasAttemptsLeft = false
    }

    // Resets the input
    this.introducedNumber = 0
  }

  // Reset all
  reset() {
    this.minNumber = 0
    this.maxNumber = 100
    this.randomNumber = 0
    this.introducedNumber = 0
    this.introducedNumbers = []
    this.totalAttempts = 5
    this.hasAttemptsLeft = true
    this.hasFoundNumber = false
  }
}