"use strict";

/**
Create the game board.
Implement the player factory function.
Handle player moves.
Check for a win or draw.
Switch between players.
 */

(function initializeGame() {
  const gameBoard = {
    1: ["-"],
    2: ["-"],
    3: ["-"],
    4: ["-"],
    5: ["-"],
    6: ["-"],
    7: ["-"],
    8: ["-"],
    9: ["-"],
  };

  const createPlayer = (symbol) => {
    const name = prompt("Enter your name");
    return { name, symbol };
  };

  const displayBoard = () => {
    let board = `${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
       `;
    return board;
  };

  //   const handlePlayerMove = () => {};
  const makeMove = (player) => {
    const spot = prompt(`Current Board\n${displayBoard()}\nChoose a spot.`);
    gameBoard[spot] = player.symbol;
  };

  const switchPlayer = () => {};

  const checkWin = () => {};

  // return { getPlayerName };
})();
