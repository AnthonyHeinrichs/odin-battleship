import './global-styles.css'
const Gameboard = require('./modules/gameboard')

const mainDiv = document.getElementById('mainDiv')

const battleshipTitle = document.createElement('h1')
battleshipTitle.classList.add('title')
battleshipTitle.classList.add('linear-wipe')
battleshipTitle.innerText = 'Battleship'
mainDiv.appendChild(battleshipTitle)