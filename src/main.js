const Ship = (length) => {
  let sunk = false
  let hits = 0

  return {
    length: length,
    hits: hits,
    isSunk: sunk
  };
};

const checkIfSunk = (ship) => {
  if (ship.hits >= ship.length) {
    ship.isSunk = true
  }
}

const hitShip = (ship) => {
  ship.hits = ship.hits += 1 
  checkIfSunk(ship)
}

module.exports = {Ship, checkIfSunk, hitShip};