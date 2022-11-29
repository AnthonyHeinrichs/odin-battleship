const showAttacks = (player, gameboard) => {
  let squares = []

  if (player.playerId == 1) {
    squares = document.querySelectorAll(".computerSquare");
  } else if (player.playerId == 2) {
    squares = document.querySelectorAll(".playerSquare");
  }
  
  for (let i = 0; i < gameboard.board.length; i++)
    if (
      gameboard.board[i].hasBeenAttacked &&
      gameboard.board[i].hasShip
    ) {
      squares.forEach((square) => {
        if (square.id == gameboard.board[i].id) {
          square.classList.add("attackedShip");
        }
      });
    } else if (
      gameboard.board[i].hasBeenAttacked &&
      gameboard.board[i].hasShip == false
    ) {
      squares.forEach((square) => {
        if (square.id == gameboard.board[i].id) {
          square.classList.add("missedShip");
        }
      });
    }
}
  

export default showAttacks;