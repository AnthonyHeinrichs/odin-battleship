const initialPageLoad = (playerGameboard, computerGameboard) => {
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

  const playerGameboardDiv = document.createElement("div");
  playerGameboardDiv.classList.add("playerGameboard");
  playerGameboardDiv.id = "playerGameboard";
  playerGameboardDiv.classList.add("hidden");
  gameboards.appendChild(playerGameboardDiv);

  // Creating a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < playerGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("playerSquare");
    square.id = playerGameboard.board[i].id;
    playerGameboardDiv.appendChild(square);
  }

  const computerGameboardDiv = document.createElement("div");
  computerGameboardDiv.classList.add("computerGameboard");
  computerGameboardDiv.id = "computerGameboard";
  computerGameboardDiv.classList.add("hidden");
  gameboards.appendChild(computerGameboardDiv);
  // Creating a a div for each square in the gameboard (10 x 10)
  for (let i = 0; i < computerGameboard.board.length; i++) {
    const square = document.createElement("div");
    square.classList.add("computerSquare");
    square.id = computerGameboard.board[i].id;
    computerGameboardDiv.appendChild(square);
  }
};

export default initialPageLoad;
