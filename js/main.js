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
  if (number < 3) {
    // number: 1, 2, 3
    result = piedra;
  } else if (number > 6) {
    // number: 7, 8, 9
    result = papel;
  } else {
    // number: 4, 5, 6
    result = tijera;
  }
  return result;
}

// compare user play and computer play
function comparePlays(user, computer) {
  if (user === computer) {
    console.log('empate');
  } else if (user === piedra && computer === papel) {
    console.log('gana la máquina');
  } else if (user === piedra && computer === tijera) {
    console.log('gana la usuaria');
  } else if (user === papel && computer === piedra) {
    console.log('gana la usuaria');
  } else if (user === papel && computer === tijera) {
    console.log('gana la máquina');
  } else if (user === tijera && computer === piedra) {
    console.log('gana la máquina');
  } else if (user === tijera && computer === papel) {
    console.log('gana la usuaria');
  }
}

// variables
const piedra = 1;
const papel = 2;
const tijera = 3;

// html elements
const buttonElement = getElement('.js-button');
const selectElement = getElement('.js-select');

// event listener and handler
buttonElement.addEventListener('click', handleClickButton);

function handleClickButton(event) {
  event.preventDefault();

  // user play (number between 1-3)
  const userPlay = parseInt(selectElement.value);

  if (userPlay) {
    console.log('1 -> piedra, 2 -> papel, 3 -> tijera');
    console.log(`Jugada de la usuaria: ${userPlay}`);

    // random number between 1-9
    const randomNumber = getRandomNumber(9);
    console.log(`Número aleatorio: ${randomNumber}`);

    // computer play (number between 1-3)
    const computerPlay = getComputerPlay(randomNumber);
    console.log(`Jugada de la computadora: ${computerPlay}`);

    // compare plays
    comparePlays(userPlay, computerPlay);
  }
}