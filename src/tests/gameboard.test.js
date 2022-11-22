const Gameboard = require('../gameboard')

test('Gameboard factory function returns a board with 100 length', () => {
  expect(Gameboard().board.length).toEqual(100)
})

test('If addShip method will update board hasShip object param', () => {
  const newGameBoard = Gameboard()
  newGameBoard.addShip(2, 1)
  expect(newGameBoard.board[2].hasShip).toBe(true) 
})

test('If a square is attacked for the first time, update has been attacked', () => {
  const newGameBoard = Gameboard()
  newGameBoard.receiveAttack(2)
  expect(newGameBoard.board[1].hasBeenAttacked).toBe(true) 
 })

 test('If a square with a ship has been attacked for the first time, return congrats', () => {
  const newGameBoard = Gameboard()
  newGameBoard.addShip(2, 1)
  expect(newGameBoard.receiveAttack(2)).toBe('Congrats you hit a ship!')
 })

 test('If a square without a ship has been attacked for the first time, return a miss', () => {
  const newGameBoard = Gameboard()
  expect(newGameBoard.receiveAttack(2)).toBe('Sorry you missed')
 })

 test('If a square has already been attacked, return a already attacked message', () => {
  const newGameBoard = Gameboard()
  expect(newGameBoard.receiveAttack(2))
  expect(newGameBoard.receiveAttack(2)).toBe('Already attacked this square')
 })