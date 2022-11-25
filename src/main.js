import "./global-styles.css";
import "./styles/start-btn.css";
import "./styles/gameboard.css";
import initialPageLoad from "./components/initial-page-load";
import placeShips from "./components/place-ships";
const Gameboard = require("./modules/gameboard");

initialPageLoad();


const startButton = document.getElementById("start");
const titleScreen = document.getElementById("titleScreen");

// Remove title content when 'Start Game' is selected
startButton.addEventListener("click", () => {
  titleScreen.classList.add("hidden");
  playerGameboardDiv.classList.remove("hidden");
  computerGameboardDiv.classList.remove("hidden");
  // runGame()
});

// Load in the gameboards, one for the user & one for the computer
const gameboards = document.createElement("div");
gameboards.classList.add("gameboards");
mainDiv.appendChild(gameboards);
// Initializing player gameboard
const playerGameboard = Gameboard();

const playerGameboardDiv = document.createElement("div");
playerGameboardDiv.classList.add("playerGameboard");
// playerGameboardDiv.classList.add("hidden");
gameboards.appendChild(playerGameboardDiv);

// Creating a div for each square in the gameboard (10 x 10)
for (let i = 0; i < playerGameboard.board.length; i++) {
  const square = document.createElement("div");
  square.classList.add("playerSquare");
  square.id = playerGameboard.board[i].id;
  playerGameboardDiv.appendChild(square);
}
// Initializing computer gameboard
const computerGameboard = Gameboard();

const computerGameboardDiv = document.createElement("div");
computerGameboardDiv.classList.add("computerGameboard");
// computerGameboardDiv.classList.add("hidden");
gameboards.appendChild(computerGameboardDiv);
// Creating a a div for each square in the gameboard (10 x 10)
for (let i = 0; i < computerGameboard.board.length; i++) {
  const square = document.createElement("div");
  square.classList.add("computerSquare");
  square.id = computerGameboard.board[i].id;
  computerGameboardDiv.appendChild(square);
}

const runGame = () => {
  // Place ships for user 
  placeShips(playerGameboard, true)
  // Place ships for computer
  placeShips(computerGameboard, false)
}

runGame();

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
