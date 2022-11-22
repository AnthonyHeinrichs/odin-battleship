const Ship = require('./ship')

const Gameboard = () => {
  const board = []

  // Creating a function that takes an id and location and returns an object
  const gameSquare = (id, location) => {
    return {
      id: id,
      location: location,
      hasShip: false,
      hasBeenAttacked: false,
    }
  }  
  // Creating 100 squares for the gameboard and adding it to the board array
  for (let i = 1; i < 101; i++) {
    if (i <= 10) {
      board.push(gameSquare(i, 'A' + i))
    } else if (i <= 20) {
      board.push(gameSquare(i, 'B' + (i - 10)))
    } else if (i <= 30) {
      board.push(gameSquare(i, 'C' + (i - 20)))
    } else if (i <= 40) {
      board.push(gameSquare(i, 'D' + (i - 30)))
    } else if (i <= 50) {
      board.push(gameSquare(i, 'E' + (i - 40)))
    } else if (i <= 60) {
      board.push(gameSquare(i, 'F' + (i - 50)))
    } else if (i <= 70) {
      board.push(gameSquare(i, 'G' + (i - 60)))
    } else if (i <= 80) {
      board.push(gameSquare(i, 'H' + (i - 70)))
    } else if (i <= 90) {
      board.push(gameSquare(i, 'I' + (i - 80)))
    } else if (i <= 100) {
      board.push(gameSquare(i, 'J' + (i - 90)))
    }
  }
  // Returning the board array with the square objects
  return {
    board: board,
    // Adding method to allow a ship to be added to the board
    addShip(boardId, length) {
      let ship = Ship(length)
      let requestedSquareIndex = this.board.findIndex( x => x.id === boardId)
    
      this.board[requestedSquareIndex - 1].hasShip = true
      this.board[requestedSquareIndex].hasShip = true
      this.board[requestedSquareIndex + 1].hasShip = true
    },
    receiveAttack(boardId) {
      let attackedSquareIndex = this.board.findIndex( x => x.id === boardId)
      let attackedBoard = this.board[attackedSquareIndex]
 
      if (attackedBoard.hasShip && !(attackedBoard.hasBeenAttacked)) {
        attackedBoard.hasBeenAttacked = true
        return 'Congrats you hit a ship!'
      } else if (attackedBoard.hasBeenAttacked) {
        return 'Already attacked this square'
      } else {
        attackedBoard.hasBeenAttacked = true
        return 'Sorry you missed'
      }
    }
  }
}

module.exports = Gameboard;