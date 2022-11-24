import './global-styles.css'
import './styles/start-btn.css'

const Gameboard = require('./modules/gameboard')

const mainDiv = document.getElementById('mainDiv')

const battleshipTitle = document.createElement('h1')
battleshipTitle.classList.add('title')
battleshipTitle.classList.add('linear-wipe')
battleshipTitle.innerText = 'Battleship'
mainDiv.appendChild(battleshipTitle)

const startBtnDiv = document.createElement('div')
startBtnDiv.classList.add('center')
mainDiv.appendChild(startBtnDiv)

const startButton = document.createElement('button')
startButton.id = 'start'
startButton.innerText = 'Start Game'
startBtnDiv.appendChild(startButton)
