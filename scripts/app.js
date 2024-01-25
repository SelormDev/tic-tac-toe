"use strict";

/**
Create the game board.
Implement the player factory function.
Handle player moves.
Check for a win or draw.
Switch between players.
 */

// (function initializeGame() {
const gameBoard = {
  1: ["O"],
  2: ["O"],
  3: ["O"],
  4: ["X"],
  5: ["O"],
  6: ["X"],
  7: ["O"],
  8: ["O"],
  9: ["X"],
};

let players = [];
let currentPlayer = null;

const createPlayer = (symbol) => {
  const name = prompt("Enter your name");
  players.push({ name, symbol });
  return { name, symbol };
};

const displayBoard = () => {
  let board = `${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
       `;
  alert(board);
  return board;
};

const handlePlayerMove = () => {};

const makeMove = (player) => {
  const spot = prompt(`Current Board\n${displayBoard()}\nChoose a spot.`);
  gameBoard[spot] = player.symbol;
};

const checkWin = (player) => {
  if (
    (gameBoard[1] === player.symbol &&
      gameBoard[2] === player.symbol &&
      gameBoard[3] === player.symbol) ||
    (gameBoard[4] === player.symbol &&
      gameBoard[5] === player.symbol &&
      gameBoard[6] === player.symbol) ||
    (gameBoard[7] === player.symbol &&
      gameBoard[8] === player.symbol &&
      gameBoard[9] === player.symbol) ||
    (gameBoard[1] === player.symbol &&
      gameBoard[4] === player.symbol &&
      gameBoard[7] === player.symbol) ||
    (gameBoard[2] === player.symbol &&
      gameBoard[5] === player.symbol &&
      gameBoard[8] === player.symbol) ||
    (gameBoard[3] === player.symbol &&
      gameBoard[6] === player.symbol &&
      gameBoard[9] === player.symbol) ||
    (gameBoard[1] === player.symbol &&
      gameBoard[5] === player.symbol &&
      gameBoard[9] === player.symbol) ||
    (gameBoard[3] === player.symbol &&
      gameBoard[5] === player.symbol &&
      gameBoard[7] === player.symbol)
  ) {
    console.log(`${player.name} won!🏆`);
    return true;
  }
  return false;
};

const checkSpot = () => {
  for (let spot in gameBoard) {
    if (gameBoard[spot][0] === "-") {
      return true;
    }
  }
  return false;
};

/**
 *
 * checkSpot = () => {
 *   for (spot in gamebpard) {
 *        if (gameBoard[spot][0] === '-') {
 *            console.log(true)
 *        } else {
 *            console.log{false}
 *          }
 *    }
 * }
 *
 */

while (checkWin(players)) {
  makeMove();
}

/**
 *
 * while (there's a spot to play) {
 *    makeMove(curentPlayer)
 *    checkForWin = function() {
 *          if (player won) {
 *                alert(victoryMessage)
 *                break;
 *            } else {
 *                switchPlayer()
 *              }
 *     }
 *    return draw;
 * }
 *
 */

const switchPlayer = () => {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
};

const computerMove = () => Math.ceil(Math.random() * 9);

// return { getPlayerName };
// })();
