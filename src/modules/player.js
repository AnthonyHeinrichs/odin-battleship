const Player = (id, ifAi) => {
  let isTurn = false
  const playerId = id
  const ai = ifAi

  return {
    isTurn: isTurn,
    playerId: playerId,
    ai: ai,
    setTurn() {
      this.isTurn = !this.isTurn
    } 
  }
}

module.exports = Player;