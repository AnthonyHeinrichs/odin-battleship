const initialPageLoad = (playerOneGameboard, playerTwoGameboard) => {
  const mainDiv = document.getElementById("mainDiv");

  mainDiv.classList.add("pictureBackground");

  const titleScreen = document.createElement("div");
  titleScreen.classList.add("titleScreen");
  titleScreen.id = "titleScreen";
  mainDiv.appendChild(titleScreen);

  const battleshipTitle = document.createElement("h1");
  battleshipTitle.classList.add("title");
  battleshipTitle.classList.add("linear-wipe");
  battleshipTitle.innerText = "Battleship";
  titleScreen.appendChild(battleshipTitle);

  const startBtnDiv = document.createElement("div");
  startBtnDiv.classList.add("center");
  titleScreen.appendChild(startBtnDiv);

  const startButton = document.createElement("button");
  startButton.id = "start";
  startButton.classList.add("mainButtons");
  startButton.innerText = "Start Game";
  startBtnDiv.appendChild(startButton);

  // Load in the gameboards, one for the user & one for the computer
  const gameboards = document.createElement("div");
  gameboards.classList.add("gameboards");
  gameboards.id = "gameboards";
  mainDiv.appendChild(gameboards);

  const playerOneDiv = document.createElement("div");
  playerOneDiv.classList.add("playerOneDiv");
  playerOneDiv.id = "playerOneDiv";
  gameboards.appendChild(playerOneDiv);

  const playerOneTitle = document.createElement("h3");
  playerOneTitle.classList.add("playerOneTitle");
  playerOneTitle.id = "playerOneTitle";
  playerOneTitle.classList.add("hidden");
  playerOneTitle.innerText = "Player board";
  playerOneDiv.prepend(playerOneTitle);

  const playerOneGameboardDiv = document.createElement("div");
  playerOneGameboardDiv.classList.add("playerOneGameboard");
  playerOneGameboardDiv.id = "playerOneGameboard";
  playerOneGameboardDiv.classList.add("hidden");
  playerOneDiv.appendChild(playerOneGameboardDiv);

  // Creating a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < playerOneGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("playerSquare");
    square.id = playerOneGameboard.board[i].id;
    playerOneGameboardDiv.appendChild(square);
  }

  const playerTwoDiv = document.createElement("div");
  playerTwoDiv.classList.add("playerTwoDiv");
  playerTwoDiv.id = "playerTwoDiv";
  gameboards.appendChild(playerTwoDiv);

  const playerTwoTitle = document.createElement("h3");
  playerTwoTitle.classList.add("playerTwoTitle");
  playerTwoTitle.id = "playerTwoTitle";
  playerTwoTitle.classList.add("hidden");
  playerTwoTitle.innerText = "Computer board";
  playerTwoDiv.prepend(playerTwoTitle);

  const playerTwoGameboardDiv = document.createElement("div");
  playerTwoGameboardDiv.classList.add("playerTwoGameboard");
  playerTwoGameboardDiv.id = "playerTwoGameboard";
  playerTwoGameboardDiv.classList.add("hidden");
  playerTwoDiv.appendChild(playerTwoGameboardDiv);
  // Creating a a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < playerTwoGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("computerSquare");
    square.id = playerTwoGameboard.board[i].id;
    playerTwoGameboardDiv.appendChild(square);
  }

  // Creating ship dock
  // Creating the dock for our ships so they can be drag & dropped
  const shipDockDiv = document.createElement("div");
  shipDockDiv.classList.add("shipDockDiv");
  shipDockDiv.classList.add("hidden");
  shipDockDiv.id = "shipDockDiv";
  mainDiv.prepend(shipDockDiv);
  const shipDock = document.createElement("div");
  shipDock.classList.add("shipDock");
  shipDock.id = "shipDock";
  shipDockDiv.appendChild(shipDock);
  const shipDockTitle = document.createElement("h3");
  shipDockTitle.classList.add("shipDockTitle");
  shipDockTitle.innerText = "Place your ships";
  shipDockDiv.appendChild(shipDockTitle);
  const axisBtn = document.createElement("button");
  axisBtn.classList.add("axisBtn");
  axisBtn.id = "axisBtn";
  axisBtn.innerText = "Rotate";
  shipDockDiv.prepend(axisBtn);

  // Creating end screen
  const endScreen = document.createElement("div");
  endScreen.classList.add("endScreen");
  endScreen.id = "endScreen";
  mainDiv.appendChild(endScreen);

  const winnerMessage = document.createElement("h2");
  winnerMessage.classList.add("winnerMessage");
  winnerMessage.id = "winnerMessage";

  const endChildDiv = document.createElement("div");
  endChildDiv.classList.add("endChildDiv");
  endScreen.appendChild(endChildDiv);

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("messagediv");
  endChildDiv.appendChild(messageDiv);
  messageDiv.appendChild(winnerMessage);

  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("buttondiv");
  endChildDiv.appendChild(buttonDiv);

  const newGameButton = document.createElement("button");
  newGameButton.id = "playAgain";
  newGameButton.classList.add("endBtn");
  newGameButton.innerText = "Play again";
  buttonDiv.appendChild(newGameButton);

  const footer = document.createElement("footer")
  footer.classList.add("footer")
  mainDiv.appendChild(footer)

  const copy = document.createElement("p")
  copy.classList.add("copy")
  copy.innerText = `© ${new Date().getFullYear()} Anthony Heinrichs.`
  footer.appendChild(copy)
};

export default initialPageLoad;
