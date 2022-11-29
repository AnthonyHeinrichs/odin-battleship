const initialPageLoad = (playerOneGameboard, playerTwoGameboard) => {
  const mainDiv = document.getElementById("mainDiv");

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
  startButton.innerText = "Start Game";
  startBtnDiv.appendChild(startButton);

  // Load in the gameboards, one for the user & one for the computer
  const gameboards = document.createElement("div");
  gameboards.classList.add("gameboards");
  mainDiv.appendChild(gameboards);

  const playerOneGameboardDiv = document.createElement("div");
  playerOneGameboardDiv.classList.add("playerOneGameboard");
  playerOneGameboardDiv.id = "playerOneGameboard";
  playerOneGameboardDiv.classList.add("hidden");
  gameboards.appendChild(playerOneGameboardDiv);

  // Creating a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < playerOneGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("playerSquare");
    square.id = playerOneGameboard.board[i].id;
    playerOneGameboardDiv.appendChild(square);
  }

  const playerTwoGameboardDiv = document.createElement("div");
  playerTwoGameboardDiv.classList.add("playerTwoGameboard");
  playerTwoGameboardDiv.id = "playerTwoGameboard";
  playerTwoGameboardDiv.classList.add("hidden");
  gameboards.appendChild(playerTwoGameboardDiv);
  // Creating a a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < playerTwoGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("computerSquare");
    square.id = playerTwoGameboard.board[i].id;
    playerTwoGameboardDiv.appendChild(square);
  }
};

export default initialPageLoad;
