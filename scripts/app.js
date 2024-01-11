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
    1: ["O"],
    2: [" "],
    3: [" "],
    4: ["X"],
    5: ["O"],
    6: ["X"],
    7: ["X"],
    8: [" "],
    9: ["O"],
  };

  const createPlayer = (name, symbol) => {
    return { name, symbol };
  };

  const displayGame = () => {
    console.log(`
        ${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
        ${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
        ${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
       `);
  };
})();
