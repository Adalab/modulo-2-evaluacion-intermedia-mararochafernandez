'use strict';

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// get html element
function getElement(selector) {
  return document.querySelector(selector);
}

// get computer play according to random number
function getComputerPlay(number) {
  let result = 0;
  // piedra -> 1, papel -> 2, tijera -> 3
  if (number < 3) { // (1, 2, 3)
    result = 1;
  } else if (number > 6) { // (7, 8, 9)
    result = 2;
  } else { // (4, 5, 6)
    result = 3;
  }
  return result;
}

// html elements
const buttonElement = getElement('.js-button');
const selectElement = getElement('.js-select');

// random number and computer play
const randomNumber = getRandomNumber(9); // random number between 1-9
console.log(randomNumber);
const computerPlay = getComputerPlay(randomNumber);
console.log(computerPlay);