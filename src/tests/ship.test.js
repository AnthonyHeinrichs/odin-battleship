const Ship = require('../modules/ship')

test('checkIfSunk function should return true if length is equal to or greater than hits', () => {
  const newShip = Ship(0)
  newShip.checkIfSunk()
  expect(newShip.isSunk).toEqual(true)
})


test('hitShip should increase the number of ship hits', () => {
  const newShip = Ship(5)
  newShip.hitShip()
  newShip.hitShip()
  newShip.hitShip()
  newShip.hitShip()
  expect(newShip.hits).toEqual(4)
})