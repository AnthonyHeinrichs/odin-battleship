const runGame = () => {
  const playerSquares = document.querySelectorAll('.playerSquare')
  
  playerSquares.forEach(square => {
    square.addEventListener('click', event => {
      console.log(event.target.id)
    })
  })

  const computerSquares = document.querySelectorAll('.computerSquare')
  
  computerSquares.forEach(square => {
    square.addEventListener('click', event => {
      console.log(event.target.id)
    })
  })
}

export default runGame;



