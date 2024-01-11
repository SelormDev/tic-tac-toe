"use strict";

const gameBoard = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
};

const createPlayer = (name, symbol) => {
  const playerName = name;
  const playerSymbol = symbol;

  return { playerName, playerSymbol };
};
