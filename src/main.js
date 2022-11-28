import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
const Gameboard = require("./modules/gameboard");

// Initializing player gameboard
const playerGameboard = Gameboard();
// Initializing computer gameboard
const computerGameboard = Gameboard();

// Executing initial page load to load all DOM elements
initialPageLoad(playerGameboard, computerGameboard);
const startButton = document.getElementById("start");

// Remove title content when 'Start Game' is selected
startButton.addEventListener("click", () => {
  const titleScreen = document.getElementById("titleScreen");
  const playerGameboardDiv = document.getElementById("playerGameboard");
  const computerGameboardDiv = document.getElementById("computerGameboard");

  titleScreen.classList.add("hidden");
  playerGameboardDiv.classList.remove("hidden");
  computerGameboardDiv.classList.remove("hidden");
  addShipsToBoard();
});

// Calling place ships function and passing the gameboards
const addShipsToBoard = () => {
  // Place ships for computer
  placeShips(computerGameboard, false);
  // Place ships for user with callback to know when all ships are placed
  placeShips(playerGameboard, true, startGame);
};

// Just temporarily checking game ready callback
function startGame() {
  console.log("Game ready");
}

// Event listeners for each square

// const playerSquares = document.querySelectorAll('.playerSquare')

// playerSquares.forEach(square => {
//   square.addEventListener('click', event => {
//     console.log(event.target.id)
//   })
// })

// const computerSquares = document.querySelectorAll('.computerSquare')

// computerSquares.forEach(square => {
//   square.addEventListener('click', event => {
//     console.log(event.target.id)
//   })
// })
