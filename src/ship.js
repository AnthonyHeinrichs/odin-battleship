const Ship = (length) => {
  let isSunk = false
  let hits = 0

  return {
    length: length,
    hits: hits,
    isSunk: isSunk,
    checkIfSunk() {
      if (hits >= length) {
        this.isSunk = true
      }
    },
    hitShip() {
      this.hits = this.hits += 1 
      this.checkIfSunk()
    }
  };
};

module.exports = Ship;