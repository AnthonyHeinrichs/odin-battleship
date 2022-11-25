const Ship = require("./ship");

const Gameboard = () => {
  const board = [];

  // Creating a function that takes an id and location and returns an object
  const gameSquare = (id, location) => {
    return {
      id: id,
      location: location,
      hasShip: false,
      hasBeenAttacked: false,
    };
  };
  // Creating 100 squares with locations for the gameboard and adding it to the board array
  for (let i = 1; i < 101; i++) {
    if (i <= 10) {
      board.push(gameSquare(i, "A" + i));
    } else if (i <= 20) {
      board.push(gameSquare(i, "B" + (i - 10)));
    } else if (i <= 30) {
      board.push(gameSquare(i, "C" + (i - 20)));
    } else if (i <= 40) {
      board.push(gameSquare(i, "D" + (i - 30)));
    } else if (i <= 50) {
      board.push(gameSquare(i, "E" + (i - 40)));
    } else if (i <= 60) {
      board.push(gameSquare(i, "F" + (i - 50)));
    } else if (i <= 70) {
      board.push(gameSquare(i, "G" + (i - 60)));
    } else if (i <= 80) {
      board.push(gameSquare(i, "H" + (i - 70)));
    } else if (i <= 90) {
      board.push(gameSquare(i, "I" + (i - 80)));
    } else if (i <= 100) {
      board.push(gameSquare(i, "J" + (i - 90)));
    }
  }

  const validPlacement = (startSquare, length, axis, board) => {
    /* If we are placing a ship along the x axis, make sure it does not 
    go outside of the gameboards x-axis, or overlap into a new row*/
    if (axis == "x") {
      let firstLocCode = board[startSquare].location.split("")[0];
      let lastLoc = board[startSquare + length - 1];
      // Check that no ships already exist on the squares
      for (let i = 0; i < length; i++) {
        if (board[startSquare + i].hasShip == true) {
          return false;
        }
      }
      // If the square of the end of the ship is outside the gameboard, return false
      if (lastLoc == undefined) {
        return false;
      }
      let lastLocCode = lastLoc.location.split("")[0];
      // Return true if location code (letter) for both location is the same
      return firstLocCode == lastLocCode;
      /* If we are placing a ship along the y axis, make sure it does not 
    go outside of the gameboards y-axis, or overlap into a new column*/
    } else if (axis == "y") {
      let firstLocCode = board[startSquare].location.split("")[1];
      let lastLoc = board[startSquare + (length * 10) - 10];
      // Check that no ships already exist on the requested squares or last loc isn't outside board
      for (let i = 0; i < length; i++) {
        if ((lastLoc == undefined) || (board[startSquare + i * 10].hasShip == true)) {
          return false;
        }
      }
      let lastLocCode = lastLoc.location.split("")[1];
      // Return true if location code (number) for both locations is the same
      return firstLocCode == lastLocCode;
    }
  };
  // Returning the board array with the square objects
  return {
    board: board,
    // Adding method to allow a ship to be added to the board
    addShip(boardId, axis, length) {
      // Getting the index of the square with ID that was passed
      let startSquare = this.board.findIndex((x) => x.id === boardId);
      // Checking if it is a valid placement for the new ship
      if (validPlacement(startSquare, length, axis, this.board)) {
        // Placing new ship on x-axis
        if (axis == "x") {
          for (let i = 0; i < length; i++) {
            this.board[startSquare + i].hasShip = true;
          }
          return('Valid');
          // Placing new ship on y-axis
        } else {
          for (let i = 0; i < length; i++) {
            this.board[startSquare + i * 10].hasShip = true;
          }
          return('Valid');
        }
        // If the requested ship location is not valid, returning message
      } else {
        return "Invalid";
      }
    },
    receiveAttack(boardId) {
      // Getting the index of the square attacked from the passed ID
      let attackedSquareIndex = this.board.findIndex((x) => x.id === boardId);
      // Getting square from above index
      let attackedSquare = this.board[attackedSquareIndex];
      // Checking that the ship hasn't been attacked already
      if (attackedSquare.hasBeenAttacked) {
        return "Already attacked this square";
        // If it hasn't been attacked, checking if a ship exists on that square
      } else if (attackedSquare.hasShip && !attackedSquare.hasBeenAttacked) {
        attackedSquare.hasBeenAttacked = true;
        return "Congrats you hit a ship!";
        // If no ship exists on that square, return a miss
      } else {
        attackedSquare.hasBeenAttacked = true;
        return "Sorry you missed";
      }
    },
  };
};

module.exports = Gameboard;
