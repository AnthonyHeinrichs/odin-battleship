import "../styles/end-screen.css";

const gameEnd = (winner, startGame, runAttack) => {
  const gameboards = document.getElementById("gameboards");
  const endScreen = document.getElementById("endScreen");
  const winnerMessage = document.getElementById("winnerMessage");
  const newGameButton = document.getElementById("playAgain");

  endScreen.classList.add("showEnd");
  gameboards.classList.add("gameboardOpac");

  const message = winner == "Player" ? "You won!" : "Computer won";
  winnerMessage.innerText = `${message}`;

  const playAgain = () => {
    const computerSquares = document.querySelectorAll(".computerSquare");
    const playerSquares = document.querySelectorAll(".playerSquare");
    const playerTwoDiv = document.getElementById("playerTwoDiv");
    const playerOneTitle = document.getElementById("playerOneTitle");
    const playerTwoTitle = document.getElementById("playerTwoTitle");
    const shipDock = document.getElementById("shipDock")

    computerSquares.forEach((square) => {
      square.classList.remove("attackedShip");
      square.classList.remove("missedShip");
    });

    playerSquares.forEach((square) => {
      square.classList.remove("attackedShip");
      square.classList.remove("missedShip");
      square.classList.remove("activeShip");
    });

    playerTwoDiv.classList.add("hidden");
    playerOneTitle.classList.add("hidden");
    playerTwoTitle.classList.add("hidden");
    gameboards.classList.remove("gameboardOpac");
    endScreen.classList.remove("showEnd");
    shipDock.classList.remove("flex");

    computerSquares.forEach((square) => {
      square.removeEventListener("click", runAttack, false);
    });

    startGame();
    newGameButton.removeEventListener("click", playAgain, false);
  };

  newGameButton.addEventListener("click", playAgain);
};

export default gameEnd;
