import '../styles/end-screen.css'

const gameEnd = (winner) => {
  const mainDiv = document.getElementById("mainDiv");
  // const gameboards = document.getElementById("gameboards")

  // gameboards.classList.add("endOpacity")
  // const computerSquares = document.querySelectorAll(".computerSquare");
  // const playerSquares = document.querySelectorAll(".playerSquare");

  // computerSquares.forEach((square) => {
  //   square.classList.add('untargetable')
  // });
  // playerSquares.forEach((square) => {
  //   square.classList.add('untargetable')
  // });

  const endScreen = document.getElementById("endScreen")
  endScreen.classList.add('showEnd')
  
  const winnerMessage = document.createElement("h2")
  winnerMessage.classList.add("winnerMessage")

  const endChildDiv = document.createElement("div")
  endChildDiv.classList.add("endChildDiv")
  endScreen.appendChild(endChildDiv)

  const messageDiv = document.createElement("div")
  messageDiv.classList.add("messagediv")
  endChildDiv.appendChild(messageDiv)

  const message = (winner == 'Player' ? "You won!" : "Computer won")
  winnerMessage.classList.add("winnerMessage")
  winnerMessage.innerText = `${message}`
  messageDiv.appendChild(winnerMessage)

  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add("buttondiv")
  endChildDiv.appendChild(buttonDiv)

  const newGameButton = document.createElement("button")
  newGameButton.id = "playAgain";
  newGameButton.classList.add("mainButtons")
  newGameButton.innerText = "Play again?";
  buttonDiv.appendChild(newGameButton)

  console.log("winner is", winner);
};

export default gameEnd;