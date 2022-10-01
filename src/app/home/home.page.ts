import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // Initialized variables
  isHidden = true
  minNumber: number = 0
  maxNumber: number = 100
  randomNumber: number = 0
  guessedNumber: number = 0
  guessedNumbers: number[] = []
  totalAttempts: number = 5
  hasAttemptsLeft: boolean = true
  hasFoundNumber: boolean = false

  // Resets the game and generates a new number
  generateRandomNumber(minNumber: number, maxNumber: number) {
    this.isHidden = true
    this.guessedNumbers = []
    this.totalAttempts = 5
    this.hasAttemptsLeft = true

    if(minNumber >= maxNumber) {
      return 0
    } else {
      return this.randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber + 1)
    }
  }

  // Validates the number. When 5 attempts have been made or finds the random number, ends the game
  validateNumber(guessedNumber: number, randomNumber: number) {
    this.guessedNumbers.push(guessedNumber)

    if(guessedNumber != randomNumber) {
      this.totalAttempts--
    } else {
      this.hasFoundNumber = true
    }

    if(this.totalAttempts == 0) {
      this.hasAttemptsLeft = false
    }
    this.guessedNumber = 0
  }

  // Reset all
  reset() {
    this.isHidden = true
    this.minNumber = 0
    this.maxNumber = 100
    this.randomNumber = 0
    this.guessedNumber = 0
    this.guessedNumbers = []
    this.totalAttempts = 5
    this.hasAttemptsLeft = true
  }
}