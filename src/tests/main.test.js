const { Ship, checkIfSunk, hitShip } = require('../main')

test('New Ship returns object with hits, isSunk status and length', () => {
  expect((Ship(5))).toEqual({
      hits: 0,
      isSunk: false,
      length: 5
  })
})

test('checkIfSunk function should return true if length is equal to or greater than hits', () => {
  const newShip = Ship(0)
  checkIfSunk(newShip)
  expect(newShip.isSunk).toEqual(true)
})


test('hitShip should increase the number of ship hits', () => {
  const newShip = Ship(5)
  hitShip(newShip)
  expect(newShip.hits).toEqual(1)
})