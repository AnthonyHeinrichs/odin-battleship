/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/initial-page-load.js":
/*!*********************************************!*\
  !*** ./src/components/initial-page-load.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initialPageLoad = function initialPageLoad(playerOneGameboard, playerTwoGameboard) {\n  var mainDiv = document.getElementById(\"mainDiv\");\n  var titleScreen = document.createElement(\"div\");\n  titleScreen.classList.add(\"titleScreen\");\n  titleScreen.id = \"titleScreen\";\n  mainDiv.appendChild(titleScreen);\n  var battleshipTitle = document.createElement(\"h1\");\n  battleshipTitle.classList.add(\"title\");\n  battleshipTitle.classList.add(\"linear-wipe\");\n  battleshipTitle.innerText = \"Battleship\";\n  titleScreen.appendChild(battleshipTitle);\n  var startBtnDiv = document.createElement(\"div\");\n  startBtnDiv.classList.add(\"center\");\n  titleScreen.appendChild(startBtnDiv);\n  var startButton = document.createElement(\"button\");\n  startButton.id = \"start\";\n  startButton.innerText = \"Start Game\";\n  startBtnDiv.appendChild(startButton);\n\n  // Load in the gameboards, one for the user & one for the computer\n  var gameboards = document.createElement(\"div\");\n  gameboards.classList.add(\"gameboards\");\n  mainDiv.appendChild(gameboards);\n  var playerOneGameboardDiv = document.createElement(\"div\");\n  playerOneGameboardDiv.classList.add(\"playerOneGameboard\");\n  playerOneGameboardDiv.id = \"playerOneGameboard\";\n  playerOneGameboardDiv.classList.add(\"hidden\");\n  gameboards.appendChild(playerOneGameboardDiv);\n\n  // Creating a div for each square in the gameboard (10 x 10)\n  for (var i = 0; i < playerOneGameboard.board.length; i++) {\n    var square = document.createElement(\"div\");\n    square.classList.add(\"playerSquare\");\n    square.id = playerOneGameboard.board[i].id;\n    playerOneGameboardDiv.appendChild(square);\n  }\n  var playerTwoGameboardDiv = document.createElement(\"div\");\n  playerTwoGameboardDiv.classList.add(\"playerTwoGameboard\");\n  playerTwoGameboardDiv.id = \"playerTwoGameboard\";\n  playerTwoGameboardDiv.classList.add(\"hidden\");\n  gameboards.appendChild(playerTwoGameboardDiv);\n  // Creating a a div for each square in the gameboard (10 x 10)\n  for (var _i = 0; _i < playerTwoGameboard.board.length; _i++) {\n    var _square = document.createElement(\"div\");\n    _square.classList.add(\"computerSquare\");\n    _square.id = playerTwoGameboard.board[_i].id;\n    playerTwoGameboardDiv.appendChild(_square);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);\n\n//# sourceURL=webpack://odin-battleship/./src/components/initial-page-load.js?");

/***/ }),

/***/ "./src/components/place-ships.js":
/*!***************************************!*\
  !*** ./src/components/place-ships.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Ship = __webpack_require__(/*! ../modules/ship */ \"./src/modules/ship.js\");\nvar placeShips = function placeShips(gameboard, player, gameStart) {\n  var mainDiv = document.getElementById(\"mainDiv\");\n  if (player) {\n    var axis = \"x\";\n    var shipLength = 0;\n    var squareId = 0;\n    var currentShip = null;\n    var addedShips = 0;\n\n    // Adding classes to each ship square to show them on the board\n    var showShipsOnBoard = function showShipsOnBoard() {\n      var _loop = function _loop(i) {\n        if (gameboard.board[i].hasShip) {\n          var squares = document.querySelectorAll(\".playerSquare\");\n          squares.forEach(function (square) {\n            if (square.id == gameboard.board[i].id) {\n              square.classList.add(\"activeShip\");\n            }\n          });\n        }\n      };\n      for (var i = 0; i < gameboard.board.length; i++) {\n        _loop(i);\n      }\n    };\n\n    // Creating the dock for our ships so they can be drag & dropped\n    var shipDockDiv = document.createElement(\"div\");\n    shipDockDiv.classList.add(\"shipDockDiv\");\n    mainDiv.prepend(shipDockDiv);\n    var shipDock = document.createElement(\"div\");\n    shipDock.classList.add(\"shipDock\");\n    shipDock.id = \"shipDock\";\n    shipDockDiv.appendChild(shipDock);\n    // Creating our ship array\n    var carrier = Ship(5, \"carrier\");\n    var battleship = Ship(4, \"battleship\");\n    var submarine = Ship(3, \"submarine\");\n    var cruiser = Ship(3, \"cruiser\");\n    var destroyer = Ship(2, \"destroyer\");\n    var ships = [carrier, battleship, submarine, cruiser, destroyer];\n\n    // Itterating over each ship and making them drag & droppable\n    ships.forEach(function (ship) {\n      var newShip = document.createElement(\"div\");\n      newShip.classList.add(\"ship\");\n      var draggableArea = document.createElement(\"div\");\n      draggableArea.classList.add(\"draggable\");\n      draggableArea.id = \"\".concat(ship.name);\n      draggableArea.setAttribute(\"length\", \"\".concat(ship.length));\n      draggableArea.setAttribute(\"draggable\", true);\n      newShip.appendChild(draggableArea);\n      for (var i = 0; i < ship.length; i++) {\n        var shipSquare = document.createElement(\"div\");\n        shipSquare.classList.add(\"shipSquare\");\n        draggableArea.appendChild(shipSquare);\n      }\n      shipDock.appendChild(newShip);\n    });\n\n    // Create button to change axis\n    var axisBtn = document.createElement(\"button\");\n    axisBtn.innerText = \"Change Axis to \".concat(axis == \"x\" ? \"Y\" : \"X\");\n    shipDockDiv.prepend(axisBtn);\n    var draggableItems = document.querySelectorAll(\".draggable\");\n    // Add event listener to axis button to change axis and button text\n    axisBtn.addEventListener(\"click\", function () {\n      if (axis == \"x\") {\n        axis = \"y\";\n        shipDock.classList.add(\"flex\");\n        draggableItems.forEach(function (ship) {\n          ship.classList.add(\"flexDirectionY\");\n        });\n      } else if (axis == \"y\") {\n        shipDock.classList.remove(\"flex\");\n        axis = \"x\";\n        draggableItems.forEach(function (ship) {\n          ship.classList.remove(\"flexDirectionY\");\n        });\n      }\n      axisBtn.innerText = \"Change Axis to \".concat(axis == \"x\" ? \"Y\" : \"X\");\n    });\n\n    // Add event listener for draggable elements\n    draggableItems.forEach(function (draggable) {\n      draggable.addEventListener(\"dragstart\", function (event) {\n        draggable.classList.add(\"dragging\");\n        currentShip = event.target.id;\n      });\n      // On drag end, add the ship to the gameboard\n      draggable.addEventListener(\"dragend\", function (event) {\n        var ship = ships.find(function (ship) {\n          return ship.name == event.target.id;\n        });\n        if (shipLength != 0 || squareId != 0) {\n          if (gameboard.addShip(squareId, axis, ship.length, ship) == \"Valid\") {\n            event.target.parentElement.remove();\n            gameboard.addShip(squareId, axis, ship.length, ship);\n            showShipsOnBoard();\n            addedShips++;\n            if (addedShips == 5) {\n              shipDockDiv.classList.add(\"hidden\");\n              gameStart();\n            }\n          } else {\n            console.log(\"Invalid placement for ship\");\n          }\n        }\n      });\n    });\n    // Setting or ship length & square Id to 0 if user drags ship outside gameboard\n    var playBoard = document.querySelector(\".playerOneGameboard\");\n    playBoard.addEventListener(\"dragleave\", function (event) {\n      if (event.clientX == 0 || event.clientY == 0) {\n        return;\n      } else {\n        shipLength = 0;\n        squareId = 0;\n      }\n    });\n\n    // Keep track of what elements were last touched\n    var playerSquares = document.querySelectorAll(\".playerSquare\");\n    playerSquares.forEach(function (square) {\n      square.addEventListener(\"dragover\", function (event) {\n        var draggable = document.querySelector(\".dragging\");\n        shipLength = parseInt(draggable.getAttribute(\"length\"));\n        squareId = parseInt(event.target.id);\n      });\n    });\n  } else {\n    (function () {\n      // Creating our ship array for computer ships\n      var carrier = Ship(5, \"carrier\");\n      var battleship = Ship(4, \"battleship\");\n      var submarine = Ship(3, \"submarine\");\n      var cruiser = Ship(3, \"cruiser\");\n      var destroyer = Ship(2, \"destroyer\");\n      var ships = [carrier, battleship, submarine, cruiser, destroyer];\n      // Placing our computer ships on the board\n      while (ships.length > 0) {\n        ships.forEach(function (ship) {\n          var squareId = parseInt(Math.random() * 99 + 1);\n          var randomAxisNum = parseInt(Math.random() * 101);\n          var axis = randomAxisNum > 50 ? \"x\" : \"y\";\n          var valid = false;\n\n          // If the randomly generated square ID and axis combo is valid, place ship\n          if (gameboard.addShip(squareId, axis, ship.length, ship) == \"Invalid\") {\n            return;\n          } else {\n            gameboard.addShip(squareId, axis, ship.length, ship);\n            ships = ships.filter(function (a) {\n              return a !== ship;\n            });\n            valid = true;\n          }\n        });\n      }\n    })();\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeShips);\n\n//# sourceURL=webpack://odin-battleship/./src/components/place-ships.js?");

/***/ }),

/***/ "./src/components/show-attacks.js":
/*!****************************************!*\
  !*** ./src/components/show-attacks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar showAttacks = function showAttacks(player, gameboard) {\n  var squares = [];\n  if (player.playerId == 1) {\n    squares = document.querySelectorAll(\".computerSquare\");\n  } else if (player.playerId == 2) {\n    squares = document.querySelectorAll(\".playerSquare\");\n  }\n  var _loop = function _loop(i) {\n    if (gameboard.board[i].hasBeenAttacked && gameboard.board[i].hasShip) {\n      squares.forEach(function (square) {\n        if (square.id == gameboard.board[i].id) {\n          square.classList.add(\"attackedShip\");\n        }\n      });\n    } else if (gameboard.board[i].hasBeenAttacked && gameboard.board[i].hasShip == false) {\n      squares.forEach(function (square) {\n        if (square.id == gameboard.board[i].id) {\n          square.classList.add(\"missedShip\");\n        }\n      });\n    }\n  };\n  for (var i = 0; i < gameboard.board.length; i++) {\n    _loop(i);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAttacks);\n\n//# sourceURL=webpack://odin-battleship/./src/components/show-attacks.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-styles.css */ \"./src/global-styles.css\");\n/* harmony import */ var _styles_start_btn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/start-btn.css */ \"./src/styles/start-btn.css\");\n/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/gameboard.css */ \"./src/styles/gameboard.css\");\n/* harmony import */ var _components_initial_page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/initial-page-load */ \"./src/components/initial-page-load.js\");\n/* harmony import */ var _components_place_ships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/place-ships */ \"./src/components/place-ships.js\");\n/* harmony import */ var _components_show_attacks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/show-attacks */ \"./src/components/show-attacks.js\");\n\n\n\n\n\n\nvar Gameboard = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\nvar Player = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\nvar Ship = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\nvar winner = null;\n\n// Initializing player gameboard\nvar playerOneGameboard = Gameboard();\n// Initializing computer gameboard\nvar playerTwoGameboard = Gameboard();\n\n// Initialize player one\nvar playerOne = Player(1, false);\nplayerOne.isTurn = true;\n// Initialize player two\nvar playerTwo = Player(2, true);\n\n// Executing initial page load to load all DOM elements\n(0,_components_initial_page_load__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(playerOneGameboard, playerTwoGameboard);\nvar startButton = document.getElementById(\"start\");\n\n// Remove title content when 'Start Game' is selected\nstartButton.addEventListener(\"click\", function () {\n  var titleScreen = document.getElementById(\"titleScreen\");\n  var playerOneGameboardDiv = document.getElementById(\"playerOneGameboard\");\n  var playerTwoGameboardDiv = document.getElementById(\"playerTwoGameboard\");\n  titleScreen.classList.add(\"hidden\");\n  playerOneGameboardDiv.classList.remove(\"hidden\");\n  playerTwoGameboardDiv.classList.remove(\"hidden\");\n  addShipsToBoard();\n});\n\n// Calling place ships function and passing the gameboards\nvar addShipsToBoard = function addShipsToBoard() {\n  // Place ships for computer\n  (0,_components_place_ships__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playerTwoGameboard, false);\n  // Place ships for user with callback to know when all ships are placed\n  (0,_components_place_ships__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playerOneGameboard, true, startGame);\n};\n\n// Just temporarily checking game ready callback\n\n/* UPDATED THE LOGIC, CALL HIT SHIP METHOD ON THE SHIP ATTACHED TO GAMEBOARD SQUARE\nAND CHECK THAT ALL SHIPS HAVE BEEN SUNK TO DETERMINE IF GAME IS OVER OR NOT \nALSO USE THE PLAYER FUNCTION TO DETERMINE WHOS TURN IT IS*/\n\nfunction startGame() {\n  var computerSquares = document.querySelectorAll(\".computerSquare\");\n  if (playerTwo.isTurn) {\n    (0,_components_show_attacks__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(playerTwo, playerOneGameboard);\n  } else if (playerOne.isTurn) {\n    computerSquares.forEach(function (square) {\n      square.addEventListener(\"click\", function (event) {\n        if (playerTwoGameboard.receiveAttack(parseInt(event.target.id)) == 'Ship hit') {\n          checkWinner();\n        }\n        (0,_components_show_attacks__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(playerOne, playerTwoGameboard);\n      });\n    });\n  } else {\n    return;\n  }\n}\nvar checkWinner = function checkWinner() {\n  var ships = [];\n  if (playerOne.isTurn) {\n    console.log('checking');\n    for (var i = 0; i < playerTwoGameboard.board.length; i++) {\n      if (playerTwoGameboard.board[i].ship.isSunk !== undefined) {\n        ships.push(playerTwoGameboard.board[i].ship.isSunk);\n      }\n    }\n    console.log(ships);\n    if (ships.every(function (ship) {\n      return ship == true;\n    })) {\n      winner = 'Player';\n      console.log('winner is', winner);\n    }\n  }\n  if (playerTwo.isTurn) {\n    for (var _i = 0; _i < playerOneGameboard.board.length; _i++) {\n      if (playerOneGameboard.board[_i].ship.isSunk !== undefined) {\n        ships.push(playerOneGameboard.board[_i].ship.isSunk);\n      }\n    }\n    if (ships.every(function (ship) {\n      return ship == true;\n    })) {\n      winner = 'Computer';\n    }\n  }\n};\n\n// TESTING AREA:\n\n//# sourceURL=webpack://odin-battleship/./src/main.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((module) => {

eval("var Gameboard = function Gameboard() {\n  var board = [];\n\n  // Creating a function that takes an id and location and returns an object\n  var gameSquare = function gameSquare(id, location) {\n    return {\n      id: id,\n      location: location,\n      ship: Object,\n      hasShip: false,\n      hasBeenAttacked: false\n    };\n  };\n  // Creating 100 squares with locations for the gameboard and adding it to the board array\n  for (var i = 1; i < 101; i++) {\n    if (i <= 10) {\n      board.push(gameSquare(i, \"A\" + i));\n    } else if (i <= 20) {\n      board.push(gameSquare(i, \"B\" + (i - 10)));\n    } else if (i <= 30) {\n      board.push(gameSquare(i, \"C\" + (i - 20)));\n    } else if (i <= 40) {\n      board.push(gameSquare(i, \"D\" + (i - 30)));\n    } else if (i <= 50) {\n      board.push(gameSquare(i, \"E\" + (i - 40)));\n    } else if (i <= 60) {\n      board.push(gameSquare(i, \"F\" + (i - 50)));\n    } else if (i <= 70) {\n      board.push(gameSquare(i, \"G\" + (i - 60)));\n    } else if (i <= 80) {\n      board.push(gameSquare(i, \"H\" + (i - 70)));\n    } else if (i <= 90) {\n      board.push(gameSquare(i, \"I\" + (i - 80)));\n    } else if (i <= 100) {\n      board.push(gameSquare(i, \"J\" + (i - 90)));\n    }\n  }\n  var validPlacement = function validPlacement(startSquare, length, axis, board) {\n    /* If we are placing a ship along the x axis, make sure it does not \n    go outside of the gameboards x-axis, or overlap into a new row*/\n    if (axis == \"x\") {\n      var firstLocCode = board[startSquare].location.split(\"\")[0];\n      var lastLoc = board[startSquare + length - 1];\n      // If the square of the end of the ship is outside the gameboard, return false\n      if (lastLoc == undefined) {\n        return false;\n      }\n      // Check that no ships already exist on the squares\n      for (var _i = 0; _i < length; _i++) {\n        if (board[startSquare + _i].hasShip == true) {\n          return false;\n        }\n      }\n      var lastLocCode = lastLoc.location.split(\"\")[0];\n      // Return true if location code (letter) for both location is the same\n      return firstLocCode == lastLocCode;\n      /* If we are placing a ship along the y axis, make sure it does not \n      go outside of the gameboards y-axis, or overlap into a new column*/\n    } else if (axis == \"y\") {\n      var _firstLocCode = board[startSquare].location.split(\"\")[1];\n      var _lastLoc = board[startSquare + length * 10 - 10];\n      // Check that no ships already exist on the requested squares or last loc isn't outside board\n      for (var _i2 = 0; _i2 < length; _i2++) {\n        if (_lastLoc == undefined || board[startSquare + _i2 * 10].hasShip == true) {\n          return false;\n        }\n      }\n      var _lastLocCode = _lastLoc.location.split(\"\")[1];\n      // Return true if location code (number) for both locations is the same\n      return _firstLocCode == _lastLocCode;\n    }\n  };\n  // Returning the board array with the square objects\n  return {\n    board: board,\n    // Adding method to allow a ship to be added to the board\n    addShip: function addShip(boardId, axis, length, ship) {\n      // Getting the index of the square with ID that was passed\n      var startSquare = this.board.findIndex(function (x) {\n        return x.id === boardId;\n      });\n      // Checking if it is a valid placement for the new ship\n      if (validPlacement(startSquare, length, axis, this.board)) {\n        // Placing new ship on x-axis\n        if (axis == \"x\") {\n          for (var _i3 = 0; _i3 < length; _i3++) {\n            this.board[startSquare + _i3].hasShip = true;\n            this.board[startSquare + _i3].ship = ship;\n          }\n          return \"Valid\";\n          // Placing new ship on y-axis\n        } else {\n          for (var _i4 = 0; _i4 < length; _i4++) {\n            this.board[startSquare + _i4 * 10].hasShip = true;\n            this.board[startSquare + _i4 * 10].ship = ship;\n          }\n          return \"Valid\";\n        }\n        // If the requested ship location is not valid, returning message\n      } else {\n        return \"Invalid\";\n      }\n    },\n    receiveAttack: function receiveAttack(boardId) {\n      // Getting the index of the square attacked from the passed ID\n      var attackedSquareIndex = this.board.findIndex(function (x) {\n        return x.id === boardId;\n      });\n      // Getting square from above index\n      var attackedSquare = this.board[attackedSquareIndex];\n      // Checking that the ship hasn't been attacked already\n      if (attackedSquare.hasBeenAttacked) {\n        return \"Already attacked this square\";\n        // If it hasn't been attacked, checking if a ship exists on that square\n      } else if (attackedSquare.hasShip && !attackedSquare.hasBeenAttacked) {\n        attackedSquare.hasBeenAttacked = true;\n        attackedSquare.ship.hitShip();\n        return 'Ship hit';\n        // If no ship exists on that square, return a miss\n      } else {\n        attackedSquare.hasBeenAttacked = true;\n        return \"Sorry you missed\";\n      }\n    }\n  };\n};\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://odin-battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((module) => {

eval("var Player = function Player(id, ifAi) {\n  var isTurn = false;\n  var playerId = id;\n  var ai = ifAi;\n  return {\n    isTurn: isTurn,\n    playerId: playerId,\n    ai: ai,\n    setTurn: function setTurn() {\n      this.isTurn = !this.isTurn;\n    }\n  };\n};\nmodule.exports = Player;\n\n//# sourceURL=webpack://odin-battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("var Ship = function Ship(length, name) {\n  var isSunk = false;\n  var hits = 0;\n  return {\n    length: length,\n    name: name,\n    hits: hits,\n    isSunk: isSunk,\n    onBoard: false,\n    checkIfSunk: function checkIfSunk() {\n      if (hits >= length) {\n        this.isSunk = true;\n      }\n    },\n    hitShip: function hitShip() {\n      this.hits++;\n      hits++;\n      this.checkIfSunk();\n    },\n    addedToBoard: function addedToBoard() {\n      this.onBoard = true;\n    }\n  };\n};\nmodule.exports = Ship;\n\n//# sourceURL=webpack://odin-battleship/./src/modules/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global-styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global-styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./public/battlefield.jpg */ \"./src/public/battlefield.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bangers&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center fixed;\\n  background-size: cover;\\n  -webkit-background-size: cover;\\n  -moz-background-size: cover;\\n  -o-background-size: cover;\\n}\\n\\n.center {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.title {\\n  font-family: 'Bangers', Arial, Helvetica, sans-serif;\\n  letter-spacing: 0.8rem;\\n  color: rgb(9, 0, 31);\\n  font-size: calc(4vw + 48px);\\n  display: flex;\\n  justify-content: center;\\n  align-items: end;\\n  margin-bottom: 0;\\n  height: 30vh;\\n}\\n\\n.linear-wipe {\\n  background: linear-gradient(-45deg, #006868, #002930, #003d66, #003c44);\\n\\tbackground-size: 300%;\\n\\ttext-transform: uppercase;\\n  background-clip: text;\\n\\t-webkit-background-clip: text;\\n\\t-webkit-text-fill-color: transparent;\\n\\tanimation: animated_text 20s ease-in-out infinite;\\n\\t-moz-animation: animated_text 20s ease-in-out infinite;\\n\\t-webkit-animation: animated_text 20s ease-in-out infinite;\\n}\\n\\n@keyframes animated_text {\\n\\t0% { background-position: 0px 50%; }\\n\\t50% { background-position: 100% 50%; }\\n\\t100% { background-position: 0px 50%; }\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/global-styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hidden {\\n  display: none !important;\\n}\\n\\n.gameboards {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  margin-top: 24px;\\n  gap: 48px;\\n}\\n\\n.playerOneGameboard, .playerTwoGameboard {\\n  display: grid;\\n  grid-template-columns: repeat(10, 60px);\\n  grid-template-rows: repeat(10, 60px);\\n  grid-gap: 0px;\\n}\\n\\n.playerSquare, .computerSquare {\\n  border: solid 0.1px;\\n  background-color: white;\\n}\\n\\n.playerSquare:hover, .computerSquare:hover {\\n  background-color: aquamarine;\\n}\\n\\n.shipDockDiv {\\n  margin-top: 24px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column-reverse;\\n  gap: 24px;\\n}\\n\\n.shipDock {\\n  background: transparent;\\n  padding: 12px;\\n  height: 180px;\\n}\\n\\n.flex {\\n  display: flex;\\n  gap: 8px;\\n}\\n\\n.ship {\\n  width: max-content;\\n  height: max-content;\\n  margin-bottom: 6px;\\n}\\n\\n.flexDirectionY {\\n  flex-direction: column;\\n}\\n\\n.shipSquare {\\n  height: 24px;\\n  width: 24px;\\n  background-color: gray;\\n  border: solid 0.1px white;\\n}\\n\\n.draggable {\\n  display: flex;\\n  border: solid 0.1px white;\\n}\\n\\n.activeShip {\\n  background: rgb(199, 162, 247);\\n}\\n\\n.attackedShip {\\n  background: rgb(51, 0, 0) !important;\\n}\\n\\n.missedShip {\\n  background: rgb(30, 96, 139) !important;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/gameboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/start-btn.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/start-btn.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#start {\\n  font-family:Verdana, Geneva, Tahoma, sans-serif;\\n  font-size: 24px;\\n  font-weight: bold;\\n  position: relative;\\n  margin-top: 24px;\\n  padding: 10px 50px;\\n  border-radius: 18px;\\n  border: none;\\n  cursor: pointer;\\n  color: rgb(199, 242, 255);\\n  background-color: #2a5086;\\n  overflow: hidden;\\n}\\n\\n#start::before {\\n  position: absolute;\\n  content: '';\\n  width: 410px;\\n  height: 400px;\\n  background-color: #ececec;\\n  top: -400px;\\n  left: -40px;\\n  border-radius: 45%;\\n  transition: 2s all ease-in-out;\\n  animation: wave 12s infinite linear;\\n}\\n\\n#start::after {\\n  position: absolute;\\n  content: '';\\n  width: 260px;\\n  height: 385px;\\n  background-color: #ffffff9a;\\n  top: -372px;\\n  left: -105px;\\n  border-radius: 45%;\\n  transition: 2s all ease-in-out;\\n  animation: wave 12s infinite linear;\\n}\\n\\n@keyframes wave {\\n  0% {\\n      transform: rotate(0deg);\\n  }\\n\\n  100% {\\n      transform: rotate(360deg);\\n  }\\n  \\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/start-btn.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/global-styles.css":
/*!*******************************!*\
  !*** ./src/global-styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/global-styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_global_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/global-styles.css?");

/***/ }),

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/gameboard.css?");

/***/ }),

/***/ "./src/styles/start-btn.css":
/*!**********************************!*\
  !*** ./src/styles/start-btn.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_start_btn_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./start-btn.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/start-btn.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_start_btn_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_start_btn_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_start_btn_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_start_btn_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-battleship/./src/styles/start-btn.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/public/battlefield.jpg":
/*!************************************!*\
  !*** ./src/public/battlefield.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc225225564e320eabd5.jpg\";\n\n//# sourceURL=webpack://odin-battleship/./src/public/battlefield.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;