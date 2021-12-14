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

// compare user play and computer play and return game result
function comparePlays(user, computer) {
  if (user === computer) {
    return 'EMPATE';
  } else if (user === piedra && computer === papel) {
    accComputer++;
    return 'GANA LA MÁQUINA';
  } else if (user === piedra && computer === tijera) {
    accUser++;
    return 'GANA LA USUARIA';
  } else if (user === papel && computer === piedra) {
    accUser++;
    return 'GANA LA USUARIA';
  } else if (user === papel && computer === tijera) {
    accComputer++;
    return 'GANA LA MÁQUINA';
  } else if (user === tijera && computer === piedra) {
    accComputer++;
    return 'GANA LA MÁQUINA';
  } else if (user === tijera && computer === papel) {
    accUser++;
    return 'GANA LA USUARIA';
  }
}

// variables
const piedra = 1;
const papel = 2;
const tijera = 3;
let acc = 0;
let accUser = 0;
let accComputer = 0;

// html elements
const buttonElement = getElement('.js-button');
const selectElement = getElement('.js-select');
const messageElement = getElement('.js-message');
const userElement = getElement('.js-user');
const computerElement = getElement('.js-computer');

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
    console.log(`Nº aleatorio: ${randomNumber}`);

    // computer play (number between 1-3)
    const computerPlay = getComputerPlay(randomNumber);
    console.log(`Jugada de la computadora: ${computerPlay}`);

    // compare plays and return game result
    const gameResult = comparePlays(userPlay, computerPlay);

    // acc++
    acc++;
    console.log(`Partida nº: ${acc}`);

    // paint messages
    messageElement.innerHTML = gameResult;
    userElement.innerHTML = 'Usuaria: ' + accUser;
    computerElement.innerHTML = 'Computadora: ' + accComputer;

    // reset acc, accUser and accComputer
    if (acc === 10) {
      acc = 0;
      accUser = 0;
      accComputer = 0;
    }
  }
}