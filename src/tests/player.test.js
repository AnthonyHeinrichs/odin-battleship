const Player = require('../modules/player')

test('Player returns an object with correct information', () => {
  const playerOne = Player(1, false)
  expect(playerOne).toEqual({
    isTurn: false,
    playerId: 1,
    ai: false,
    aiAttack: expect.any(Function),
    setTurn: expect.any(Function)
  })
})

test('You can change the turn of the player', () => {
  const playerOne = Player(1, false)
  playerOne.setTurn()
  expect(playerOne.isTurn).toBe(true)
})

