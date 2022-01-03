'use strict';

// generate random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// get html element
function getElement(selector) {
  return document.querySelector(selector);
}

// generate computer play according to random number
function generateComputerPlay(number) {
  let play = 0;
  if (number < 3) {
    // number: 1, 2, 3
    play = piedra;
  } else if (number > 6) {
    // number: 7, 8, 9
    play = papel;
  } else {
    // number: 4, 5, 6
    play = tijera;
  }
  return play;
}

// compare plays, increase scores and return game result
function comparePlays(user, computer) {
  if (user === computer) {
    return 'Empate';
  } else if (user === piedra) {
    if (computer === papel) {
      accumulators.computerScore++;
      return 'Gana la máquina';
    } else {
      accumulators.userScore++;
      return 'Gana la usuaria';
    }
  } else if (user === papel) {
    if (computer === piedra) {
      accumulators.userScore++;
      return 'Gana la usuaria';
    } else {
      accumulators.computerScore++;
      return 'Gana la máquina';
    }
  } else {
    if (computer === piedra) {
      accumulators.computerScore++;
      return 'Gana la máquina';
    } else {
      accumulators.userScore++;
      return 'Gana la usuaria';
    }
  }
}

// reset number of plays, user score and computer score
function resetAccs(reset) {
  if (accumulators.numberOfPlays === 10 || reset === true) {
    accumulators.numberOfPlays = 0;
    accumulators.userScore = 0;
    accumulators.computerScore = 0;
  }
}

// variables
const piedra = 1;
const papel = 2;
const tijera = 3;
const accumulators = {
  numberOfPlays: 0,
  userScore: 0,
  computerScore: 0
}
let resetButton = false;

// html elements
const submitElement = getElement('.js-submit');
const selectElement = getElement('.js-select');
const messageElement = getElement('.js-message');
const userElement = getElement('.js-user');
const computerElement = getElement('.js-computer');
const resetElement = getElement('.js-reset');

// event listener and handler
submitElement.addEventListener('click', handleClickSubmit);
resetElement.addEventListener('click', handleClickReset);

function handleClickSubmit(event) {
  event.preventDefault();

  // user play (number between 1-3)
  if (selectElement.value === '1' || selectElement.value === '2' || selectElement.value === '3') {
    const userPlay = parseInt(selectElement.value);

    // random number between 1-9
    const randomNumber = getRandomNumber(9);

    // computer play (number between 1-3)
    const computerPlay = generateComputerPlay(randomNumber);

    // compare plays, increase scores and return game result
    const gameResult = comparePlays(userPlay, computerPlay);

    // increase number of plays
    accumulators.numberOfPlays++;

    // paint messages: game result, user score and computer score
    messageElement.innerHTML = `Jugada #${accumulators.numberOfPlays}: ${gameResult}`;
    userElement.innerHTML = `Usuaria: ${accumulators.userScore}`;
    computerElement.innerHTML = `Computadora: ${accumulators.computerScore}`;

    // reset accumulators
    resetButton = false;
    resetAccs(resetButton);

    console.log('1 -> piedra, 2 -> papel, 3 -> tijera');
    console.log(`Jugada de la usuaria: ${userPlay}`);
    console.log(`Nº aleatorio: ${randomNumber}`);
    console.log(`Jugada de la computadora: ${computerPlay}`);
    console.log('---');
  }
}

function handleClickReset(event) {
  event.preventDefault();

  // reset accumulators
  resetButton = true;
  resetAccs(resetButton);

  // paint messages: game result, user score and computer score
  messageElement.innerHTML = '¡Partida reiniciada!';
  userElement.innerHTML = 'Usuaria: 0';
  computerElement.innerHTML = 'Computadora: 0';
}