import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
import showAttacks from "./components/show-attacks";
import gameEnd from "./components/game-end";
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player");

let winner = null;
let playerOneGameboard = null;
let playerTwoGameboard = null;
let playerOne = null;
let playerTwo = null;

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
};

setupGame();

const startGame = () => {
  const mainDiv = document.getElementById('mainDiv')
  mainDiv.classList.remove("pictureBackground")
  mainDiv.classList.add("mainDivFlex")

  // Place ships for computer
  placeShips(playerTwoGameboard, false);
  // Place ships for user with callback to know when all ships are placed
  placeShips(playerOneGameboard, true, runGame);

  function runGame() {
    const playerTwoGameboardDiv = document.getElementById("playerTwoGameboard");
    playerTwoGameboardDiv.classList.remove("hidden");

    const playerOneDiv = document.getElementById("playerOneDiv")
    const playerTwoDiv = document.getElementById("playerTwoDiv")

    const playerOneTitle = document.createElement('h3')
    playerOneTitle.classList.add("playerOneTitle")
    playerOneTitle.innerText = 'Player board'
    playerOneDiv.prepend(playerOneTitle)

    const playerTwoTitle = document.createElement('h3')
    playerTwoTitle.classList.add("playerTwoTitle")
    playerTwoTitle.innerText = 'Computer board'
    playerTwoDiv.prepend(playerTwoTitle)

    const computerSquares = document.querySelectorAll(".computerSquare");
    computerSquares.forEach((square) => {
      square.addEventListener("click", function _listener(event) {
        if (
          playerTwoGameboard.receiveAttack(parseInt(event.target.id)) ==
          "Already attacked this square"
        ) {
          return;
        } else {
          showAttacks(playerOne, playerTwoGameboard);
          checkWinner();
          playerOne.isTurn = false;
          playerTwo.isTurn = true;
          playerTwo.aiAttack(
            playerOneGameboard,
            playerOne,
            playerTwo,
            showAttacks,
            checkWinner
          );
        }
      });
    });
  }

  const checkWinner = () => {
    let ships = [];

    if (playerOne.isTurn) {
      console.log("checking");
      for (let i = 0; i < playerTwoGameboard.board.length; i++) {
        if (playerTwoGameboard.board[i].ship.isSunk !== undefined) {
          ships.push(playerTwoGameboard.board[i].ship.isSunk);
        }
      }

      if (ships.every((ship) => ship == true)) {
        winner = "Player";
        gameEnd(winner)
        setupGame();
      }
    } else if (playerTwo.isTurn) {
      for (let i = 0; i < playerOneGameboard.board.length; i++) {
        if (playerOneGameboard.board[i].ship.isSunk !== undefined) {
          ships.push(playerOneGameboard.board[i].ship.isSunk);
        }
      }
      if (ships.every((ship) => ship == true)) {
        winner = "Computer";
        gameEnd(winner)
        setupGame();
      }
    }
  };
};

// Executing initial page load to load all DOM elements
initialPageLoad(playerOneGameboard, playerTwoGameboard);
const startButton = document.getElementById("start");

// Remove title content when 'Start Game' is selected
startButton.addEventListener("click", () => {
  const titleScreen = document.getElementById("titleScreen");
  const playerOneGameboardDiv = document.getElementById("playerOneGameboard");

  titleScreen.classList.add("hidden");
  playerOneGameboardDiv.classList.remove("hidden");
  startGame();
});
