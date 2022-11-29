import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
import showAttacks from "./components/show-attacks"
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player")

let winner = null;
let counter = 1

// Initializing player gameboard
const playerOneGameboard = Gameboard();
// Initializing computer gameboard
const playerTwoGameboard = Gameboard();

// Initialize player one
const playerOne = Player(1, false)
playerOne.isTurn = true
// Initialize player two
const playerTwo = Player(2, true)

// Executing initial page load to load all DOM elements
initialPageLoad(playerOneGameboard, playerTwoGameboard);
const startButton = document.getElementById("start");

// Remove title content when 'Start Game' is selected
startButton.addEventListener("click", () => {
  const titleScreen = document.getElementById("titleScreen");
  const playerOneGameboardDiv = document.getElementById("playerOneGameboard");
  const playerTwoGameboardDiv = document.getElementById("playerTwoGameboard");

  titleScreen.classList.add("hidden");
  playerOneGameboardDiv.classList.remove("hidden");
  playerTwoGameboardDiv.classList.remove("hidden");
  addShipsToBoard();
});

// Calling place ships function and passing the gameboards
const addShipsToBoard = () => {
  // Place ships for computer
  placeShips(playerTwoGameboard, false);
  // Place ships for user with callback to know when all ships are placed
  placeShips(playerOneGameboard, true, runGame);
};

function runGame() {
  const computerSquares = document.querySelectorAll(".computerSquare");
  computerSquares.forEach((square) => {
    square.addEventListener("click", (event) => {
      if (playerTwoGameboard.receiveAttack(parseInt(event.target.id)) == 'Ship hit') {
        checkWinner()
      }
      playerOne.isTurn = false
      playerTwo.isTurn = true
      aiAttack()
      showAttacks(playerOne, playerTwoGameboard);
    });
  });
}

function aiAttack() {
  if (playerOneGameboard.receiveAttack(counter) == 'Ship hit') {
    checkWinner()
  }
  counter++
  showAttacks(playerTwo, playerOneGameboard)
  playerOne.isTurn = true
  playerTwo.isTurn = false
}

const checkWinner = () => {
  let ships = []

  if (playerOne.isTurn) {
    console.log('checking')
    for (let i = 0; i < playerTwoGameboard.board.length; i++) {
      if (playerTwoGameboard.board[i].ship.isSunk !== undefined) {
        ships.push(playerTwoGameboard.board[i].ship.isSunk)
      }
    }

    if (ships.every(ship => ship == true)) {
      winner = 'Player'
      console.log('winner is', winner)
    }
  }

  if (playerTwo.isTurn) {
    for (let i = 0; i < playerOneGameboard.board.length; i++) {
      if (playerOneGameboard.board[i].ship.isSunk !== undefined) {
        ships.push(playerOneGameboard.board[i].ship.isSunk)
      }
    }
    console.log(ships)
    if (ships.every(ship => ship == true)) {
      winner = 'Computer'
      console.log('winner is', winner)
    }
  }
};

// TESTING AREA: 

