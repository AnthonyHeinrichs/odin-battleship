const Ship = (length, name) => {
  let isSunk = false;
  let hits = 0;

  return {
    length: length,
    name: name,
    hits: hits,
    isSunk: isSunk,
    onBoard: false,
    checkIfSunk() {
      if (hits >= length) {
        this.isSunk = true;
      }
    },
    hitShip() {
      this.hits++;
      hits++;
      this.checkIfSunk();
    },
    addedToBoard() {
      this.onBoard = true;
    }
  };
};

module.exports = Ship;
