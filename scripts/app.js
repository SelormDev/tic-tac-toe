"use strict";

// (function initializeGame() {
const cells = document.querySelectorAll(".cell");
const cell1 = document.getElementById("1").textContent;
const cell2 = document.getElementById("2").textContent;
const cell3 = document.getElementById("3").textContent;
const cell4 = document.getElementById("4").textContent;
const cell5 = document.getElementById("5").textContent;
const cell6 = document.getElementById("6").textContent;
const cell7 = document.getElementById("7").textContent;
const cell8 = document.getElementById("8").textContent;
const cell9 = document.getElementById("9").textContent;

let players = [];
let currentPlayer;

const createPlayer = (symbol) => {
  const name = prompt("Enter your name");
  players.push({ name, symbol });
  return { name, symbol };
};

// ------- Create Players -------
(function createPlayers() {
  while (players.length < 2) {
    if (players.length < 1) {
      createPlayer("X");
    } else {
      createPlayer("O");
    }
  }
})();

let gameBoard = {
  1: cell1,
  2: cell2,
  3: cell3,
  4: cell4,
  5: cell5,
  6: cell6,
  7: cell7,
  8: cell8,
  9: cell9,
};

currentPlayer = players[0];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "") {
      alert("Spot already taken. Try again.");
    } else {
      cell.textContent = currentPlayer.symbol;
      gameBoard[cell.id] = currentPlayer.symbol;

      if (!checkSpot()) {
        alert("Draw");
        resetGameBoard();
      } else if (checkForWin()) {
        alert(`${currentPlayer.name} won!`);
        resetGameBoard();
      }

        if (currentPlayer.symbol === "X") {
  cell.style = "font-size: 4rem; color: red; font-weight: 800;";
} else {
  cell.style = "font-size: 4rem; color: green; font-weight: 800;";
}
    }

  });
});
// };

const displayBoard = () => {
  let board = `${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
`;
  return board;
};

const resetGameBoard = () => {
  for (const [key] of Object.keys(gameBoard)) {
    gameBoard[key] = "";
  }

  for (const cell of cells) {
    cell.textContent = "";
  }
};

const switchPlayer = () => {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
};

const checkForWin = () => {
  if (
    (currentPlayer.symbol === gameBoard[1] &&
      currentPlayer.symbol === gameBoard[2] &&
      currentPlayer.symbol === gameBoard[3]) ||
    (currentPlayer.symbol === gameBoard[4] &&
      currentPlayer.symbol === gameBoard[5] &&
      currentPlayer.symbol === gameBoard[6]) ||
    (currentPlayer.symbol === gameBoard[7] &&
      currentPlayer.symbol === gameBoard[8] &&
      currentPlayer.symbol === gameBoard[9]) ||
    (currentPlayer.symbol === gameBoard[1] &&
      currentPlayer.symbol === gameBoard[4] &&
      currentPlayer.symbol === gameBoard[7]) ||
    (currentPlayer.symbol === gameBoard[2] &&
      currentPlayer.symbol === gameBoard[5] &&
      currentPlayer.symbol === gameBoard[8]) ||
    (currentPlayer.symbol === gameBoard[3] &&
      currentPlayer.symbol === gameBoard[6] &&
      currentPlayer.symbol === gameBoard[9]) ||
    (currentPlayer.symbol === gameBoard[1] &&
      currentPlayer.symbol === gameBoard[5] &&
      currentPlayer.symbol === gameBoard[9]) ||
    (currentPlayer.symbol === gameBoard[3] &&
      currentPlayer.symbol === gameBoard[5] &&
      currentPlayer.symbol === gameBoard[7])
  )
    return true;

  switchPlayer();
  return false;
};

const checkSpot = () => {
  for (const [key, value] of Object.entries(gameBoard)) {
    if (value === "") return true;
  }

  return false;
};

const computerMove = () => Math.ceil(Math.random() * 9);

// return { displayBoard };
// });
