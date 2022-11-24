import './global-styles.css'
import './styles/start-btn.css'
import './styles/gameboard.css'

const Gameboard = require('./modules/gameboard')

const mainDiv = document.getElementById('mainDiv')

const titleScreen = document.createElement('div')
titleScreen.classList.add('titleScreen')
mainDiv.appendChild(titleScreen)

const battleshipTitle = document.createElement('h1')
battleshipTitle.classList.add('title')
battleshipTitle.classList.add('linear-wipe')
battleshipTitle.innerText = 'Battleship'
titleScreen.appendChild(battleshipTitle)

const startBtnDiv = document.createElement('div')
startBtnDiv.classList.add('center')
titleScreen.appendChild(startBtnDiv)

const startButton = document.createElement('button')
startButton.id = 'start'
startButton.innerText = 'Start Game'
startBtnDiv.appendChild(startButton)

// Remove title content when 'Start Game' is selected
startButton.addEventListener('click', () => {
  titleScreen.classList.add('hidden')
  playerGameboardDiv.classList.remove('hidden')
  computerGameboardDiv.classList.remove('hidden')
})

const gameboards = document.createElement('div')
gameboards.classList.add('gameboards')
mainDiv.appendChild(gameboards)

const playerGameboard = Gameboard()

const playerGameboardDiv = document.createElement('div')
playerGameboardDiv.classList.add('playerGameboard')
playerGameboardDiv.classList.add('hidden')
gameboards.appendChild(playerGameboardDiv)

for (let i = 0; i < playerGameboard.board.length; i++) {
  const square = document.createElement('div')
  square.classList.add('playerSquare')
  square.id = playerGameboard.board[i].id
  playerGameboardDiv.appendChild(square)
}

const computerGameboard = Gameboard()

const computerGameboardDiv = document.createElement('div')
computerGameboardDiv.classList.add('computerGameboard')
computerGameboardDiv.classList.add('hidden')
gameboards.appendChild(computerGameboardDiv)

for (let i = 0; i < computerGameboard.board.length; i++) {
  const square = document.createElement('div')
  square.classList.add('computerSquare')
  square.id = computerGameboard.board[i].id
  computerGameboardDiv.appendChild(square)
}
