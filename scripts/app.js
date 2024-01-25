"use strict";

(function initializeGame() {
  let gameBoard = {
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

  let players = [];
  let currentPlayer;

  const createPlayer = (symbol) => {
    const name = prompt("Enter your name");
    players.push({ name, symbol });
    return { name, symbol };
  };

  (function createPlayers() {
    while (players.length < 2) {
      if (players.length < 1) {
        createPlayer("X");
      } else {
        createPlayer("O");
      }
    }
  })();

  currentPlayer = players[0];

  const makeMove = (player) => {
    const spot = prompt(
      `Current Board\n${displayBoard()}\n${
        currentPlayer.name
      }'s turn. Your symbol is ${currentPlayer.symbol}\nChoose a spot.`
    );
    if (spot) {
      if (gameBoard[spot][0] !== "-") {
        alert("Spot already taken. Try again.");
        makeMove(player);
      } else {
        gameBoard[spot] = player.symbol;
      }
    } else {
      alert("Please enter a spot.");
      makeMove(player);
    }
  };

  const displayBoard = () => {
    let board = `${gameBoard[1]} | ${gameBoard[2]} | ${gameBoard[3]}
${gameBoard[4]} | ${gameBoard[5]} | ${gameBoard[6]}
${gameBoard[7]} | ${gameBoard[8]} | ${gameBoard[9]}
`;
    return board;
  };

  const resetGameBoard = () => {
    for (let board in gameBoard) {
      gameBoard[board] = "-";
    }
  };

  const switchPlayer = () => {
    if (currentPlayer === players[0]) {
      currentPlayer = players[1];
    } else {
      currentPlayer = players[0];
    }
  };
  const checkForWin = (player) => {
    if (
      (player.symbol === gameBoard[1] &&
        player.symbol === gameBoard[2] &&
        player.symbol === gameBoard[3]) ||
      (player.symbol === gameBoard[4] &&
        player.symbol === gameBoard[5] &&
        player.symbol === gameBoard[6]) ||
      (player.symbol === gameBoard[7] &&
        player.symbol === gameBoard[8] &&
        player.symbol === gameBoard[9]) ||
      (player.symbol === gameBoard[1] &&
        player.symbol === gameBoard[4] &&
        player.symbol === gameBoard[7]) ||
      (player.symbol === gameBoard[2] &&
        player.symbol === gameBoard[5] &&
        player.symbol === gameBoard[8]) ||
      (player.symbol === gameBoard[3] &&
        player.symbol === gameBoard[6] &&
        player.symbol === gameBoard[9]) ||
      (player.symbol === gameBoard[1] &&
        player.symbol === gameBoard[5] &&
        player.symbol === gameBoard[9]) ||
      (player.symbol === gameBoard[3] &&
        player.symbol === gameBoard[5] &&
        player.symbol === gameBoard[7])
    ) {
      return true;
    }
  };

  const checkSpot = () => {
    for (let spot in gameBoard) {
      if (gameBoard[spot][0] === "-") {
        return true;
      }
    }
    return false;
  };

  (function playGame() {
    while (checkSpot()) {
      makeMove(currentPlayer);
      if (checkForWin(currentPlayer)) {
        alert(`${currentPlayer.name} won!`);
        console.log(`${currentPlayer.name} won!`);
        break;
      } else {
        switchPlayer();
      }
    }
    if (!checkSpot()) alert("Draw");
    resetGameBoard();
  })();

  const computerMove = () => Math.ceil(Math.random() * 9);

  return { displayBoard };
})();
