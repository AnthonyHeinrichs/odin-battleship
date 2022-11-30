import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
import showAttacks from "./components/show-attacks";
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player");

let winner = null;
let playerOneGameboard = null
let playerTwoGameboard = null
let playerOne = null
let playerTwo = null

const setupGame = () => {
  // Initializing player gameboard
  playerOneGameboard = Gameboard();
  // Initializing computer gameboard
  playerTwoGameboard = Gameboard();

  // Initialize player one
  playerOne = Player(1, false);
  playerOne.isTurn = true;
  // Initialize player two
  playerTwo = Player(2, true);
}

setupGame()

const startGame = () => {
  // Place ships for computer
  placeShips(playerTwoGameboard, false);
  // Place ships for user with callback to know when all ships are placed
  placeShips(playerOneGameboard, true, runGame);

  function runGame() {
    const computerSquares = document.querySelectorAll(".computerSquare");
    computerSquares.forEach((square) => {
      square.addEventListener("click", (event) => {
        if (
          playerTwoGameboard.receiveAttack(parseInt(event.target.id)) ==
          "Already attacked this square"
        ) {
          return;
        } else {
          playerOne.isTurn = false;
          playerTwo.isTurn = true;
          playerTwo.aiAttack(
            playerOneGameboard,
            playerOne,
            playerTwo,
            showAttacks,
            checkWinner
          );
          checkWinner();
          showAttacks(playerOne, playerTwoGameboard);
        }
      });
    });
  }
  
  const checkWinner = () => {
    let ships = [];
    const oneSquares = document.querySelectorAll(".computerSquare");
    const twoSquares = document.querySelectorAll(".playerSquare");
  
    if (playerOne.isTurn) {
      console.log("checking");
      for (let i = 0; i < playerTwoGameboard.board.length; i++) {
        if (playerTwoGameboard.board[i].ship.isSunk !== undefined) {
          ships.push(playerTwoGameboard.board[i].ship.isSunk);
        }
      }
  
      if (ships.every((ship) => ship == true)) {
        const titleScreen = document.getElementById("titleScreen");
        winner = "Player";
        console.log("winner is", winner);
        setupGame()
        titleScreen.classList.remove("hidden");
        oneSquares.forEach(square => {
          square.classList.remove('attackedShip')
          square.classList.remove('missedShip')
        })
        twoSquares.forEach(square => {
          square.classList.remove('attackedShip')
          square.classList.remove('missedShip')
          square.classList.remove('activeShip')
        })
      }
    }
  
    if (playerTwo.isTurn) {
      for (let i = 0; i < playerOneGameboard.board.length; i++) {
        if (playerOneGameboard.board[i].ship.isSunk !== undefined) {
          ships.push(playerOneGameboard.board[i].ship.isSunk);
        }
      }
      if (ships.every((ship) => ship == true)) {
        const titleScreen = document.getElementById("titleScreen");
        winner = "Computer";
        console.log("winner is", winner);
        setupGame()
        titleScreen.classList.remove("hidden");
        oneSquares.forEach(square => {
          square.classList.remove('attackedShip')
          square.classList.remove('missedShip')
        })
        twoSquares.forEach(square => {
          square.classList.remove('attackedShip')
          square.classList.remove('missedShip')
          square.classList.remove('activeShip')
        })
      }
    }
  };
}

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
  startGame();
});

// TESTING AREA:
// const showWinnerScreen = () => {
//   const gameboardOne = document.getElementById("playerOneGameboard");
//   const gameboardTwo = document.getElementById("playerTwoGameboard");

//   gameboardOne.classList.add("hidden");
//   gameboardTwo.classList.add("hidden");

// };
