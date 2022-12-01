import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
import showAttacks from "./components/show-attacks";
import gameEnd from "./components/game-end";
import { remove } from "lodash";
const Gameboard = require("./modules/gameboard");
const Player = require("./modules/player");
const Ship = require("./modules/ship");

let winner = null;
let playerOneGameboard = null;
let playerTwoGameboard = null;
let playerOne = null;
let playerTwo = null;
let playerOneShips = [];
let playerTwoShips = [];

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
  playerTwo.isTurn = false;

  const oneCarrier = Ship(5, "carrier");
  const oneBattleship = Ship(4, "battleship");
  const oneSubmarine = Ship(3, "submarine");
  const oneCruiser = Ship(3, "cruiser");
  const oneDestroyer = Ship(2, "destroyer");
  playerOneShips = [
    oneCarrier,
    oneBattleship,
    oneSubmarine,
    oneCruiser,
    oneDestroyer,
  ];

  const twoCarrier = Ship(5, "carrier");
  const twoBattleship = Ship(4, "battleship");
  const twoSubmarine = Ship(3, "submarine");
  const twoCruiser = Ship(3, "cruiser");
  const twoDestroyer = Ship(2, "destroyer");
  playerTwoShips = [
    twoCarrier,
    twoBattleship,
    twoSubmarine,
    twoCruiser,
    twoDestroyer,
  ];
};

setupGame();

const startGame = () => {
  const mainDiv = document.getElementById("mainDiv");
  mainDiv.classList.remove("pictureBackground");
  mainDiv.classList.add("mainDivFlex");

  // Place ships for computer
  placeShips(playerTwoGameboard, false, playerOneShips, playerTwoShips);

  // Place ships for user with callback to know when all ships are placed
  placeShips(playerOneGameboard, true, playerOneShips, playerTwoShips, runGame);

  function runGame() {
    const playerTwoGameboardDiv = document.getElementById("playerTwoGameboard");
    playerTwoGameboardDiv.classList.remove("hidden");

    const playerTwoDiv = document.getElementById("playerTwoDiv");
    playerTwoDiv.classList.remove("hidden");

    const playerOneTitle = document.getElementById("playerOneTitle");
    playerOneTitle.classList.remove("hidden");
    const playerTwoTitle = document.getElementById("playerTwoTitle");
    playerTwoTitle.classList.remove("hidden");

    const runAttack = () => {
      if (
        playerTwoGameboard.receiveAttack(parseInt(event.target.id)) ==
        "Already attacked this square"
      ) {
        return;
      } else {
        showAttacks(playerOne, playerTwoGameboard);
        playerOne.isTurn = false;
        playerTwo.isTurn = true;
        playerTwo.aiAttack(
          playerOneGameboard,
          playerOne,
          playerTwo,
          showAttacks
        );
      }
      checkWinner(runAttack);
    };

    const computerSquares = document.querySelectorAll(".computerSquare");
    computerSquares.forEach((square) => {
      square.addEventListener("click", runAttack);
    });
  }

  const checkWinner = (runAttack) => {
    let computerShips = [];
    let playerShips = [];

    for (let i = 0; i < playerTwoGameboard.board.length; i++) {
      if (playerTwoGameboard.board[i].ship.isSunk !== undefined) {
        computerShips.push(playerTwoGameboard.board[i].ship.isSunk);
      }
    }

    if (computerShips.every((ship) => ship == true)) {
      console.log('player winner')
      winner = "Player";
      gameEnd(winner, startGame, runAttack);
      playerOneGameboard = null;
      playerTwoGameboard = null;
      playerOne = null;
      playerTwo = null;
      playerOneShips = [];
      playerTwoShips = [];
      setupGame();
      return;
    }

    for (let i = 0; i < playerOneGameboard.board.length; i++) {
      if (playerOneGameboard.board[i].ship.isSunk !== undefined) {
        playerShips.push(playerOneGameboard.board[i].ship.isSunk);
      }
    }

    if (playerShips.every((ship) => ship == true)) {
      console.log('computer winner')
      winner = "Computer";
      gameEnd(winner, startGame, runAttack);
      playerOneGameboard = null;
      playerTwoGameboard = null;
      playerOne = null;
      playerTwo = null;
      playerOneShips = [];
      playerTwoShips = []
      setupGame();
      return;
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
