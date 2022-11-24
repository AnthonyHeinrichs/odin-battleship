import './global-styles.css'
import './styles/start-btn.css'

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
})