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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nvar Gameboard = function Gameboard() {\n  var board = [];\n\n  // Creating a function that takes an id and location and returns an object\n  var gameSquare = function gameSquare(id, location) {\n    return {\n      id: id,\n      location: location,\n      hasShip: false,\n      hasBeenAttacked: false\n    };\n  };\n  // Creating 100 squares with locations for the gameboard and adding it to the board array\n  for (var i = 1; i < 101; i++) {\n    if (i <= 10) {\n      board.push(gameSquare(i, \"A\" + i));\n    } else if (i <= 20) {\n      board.push(gameSquare(i, \"B\" + (i - 10)));\n    } else if (i <= 30) {\n      board.push(gameSquare(i, \"C\" + (i - 20)));\n    } else if (i <= 40) {\n      board.push(gameSquare(i, \"D\" + (i - 30)));\n    } else if (i <= 50) {\n      board.push(gameSquare(i, \"E\" + (i - 40)));\n    } else if (i <= 60) {\n      board.push(gameSquare(i, \"F\" + (i - 50)));\n    } else if (i <= 70) {\n      board.push(gameSquare(i, \"G\" + (i - 60)));\n    } else if (i <= 80) {\n      board.push(gameSquare(i, \"H\" + (i - 70)));\n    } else if (i <= 90) {\n      board.push(gameSquare(i, \"I\" + (i - 80)));\n    } else if (i <= 100) {\n      board.push(gameSquare(i, \"J\" + (i - 90)));\n    }\n  }\n  var validPlacement = function validPlacement(startSquare, length, axis, board) {\n    /* If we are placing a ship along the x axis, make sure it does not \n    go outside of the gameboards x-axis, or overlap into a new row*/\n    if (axis == \"x\") {\n      var firstLocCode = board[startSquare].location.split(\"\")[0];\n      var lastLoc = board[startSquare + length - 1];\n      // If the square of the end of the ship is outside the gameboard, return false\n      if (lastLoc == undefined) {\n        return false;\n      }\n      var lastLocCode = lastLoc.location.split(\"\")[0];\n      // Return true if location code (letter) for both location is the same\n      return firstLocCode == lastLocCode;\n      /* If we are placing a ship along the y axis, make sure it does not \n      go outside of the gameboards y-axis, or overlap into a new column*/\n    } else {\n      var _firstLocCode = board[startSquare].location.split(\"\")[1];\n      var _lastLoc = board[startSquare + 10 * length];\n      // If the square of the end of the ship is outside the gameboard, return false\n      if (_lastLoc == undefined) {\n        return false;\n      }\n      var _lastLocCode = _lastLoc.location.split(\"\")[1];\n      // Return true if location code (number) for both locations is the same\n      return _firstLocCode == _lastLocCode;\n    }\n  };\n  // Returning the board array with the square objects\n  return {\n    board: board,\n    // Adding method to allow a ship to be added to the board\n    addShip: function addShip(boardId, axis, length) {\n      // Getting the index of the square with ID that was passed\n      var startSquare = this.board.findIndex(function (x) {\n        return x.id === boardId;\n      });\n      // Checking if it is a valid placement for the new ship\n      if (validPlacement(startSquare, length, axis, this.board)) {\n        // Placing new ship on x-axis\n        if (axis == \"x\") {\n          for (var _i = 0; _i < length; _i++) {\n            this.board[startSquare + _i].hasShip = true;\n          }\n          // Placing new ship on y-axis\n        } else {\n          for (var _i2 = 0; _i2 < length; _i2++) {\n            this.board[startSquare + _i2 * 10].hasShip = true;\n          }\n        }\n        // If the requested ship location is not valid, returning message\n      } else {\n        return \"Your ship cannot be placed here\";\n      }\n    },\n    receiveAttack: function receiveAttack(boardId) {\n      // Getting the index of the square attacked from the passed ID\n      var attackedSquareIndex = this.board.findIndex(function (x) {\n        return x.id === boardId;\n      });\n      // Getting square from above index\n      var attackedSquare = this.board[attackedSquareIndex];\n      // Checking that the ship hasn't been attacked already\n      if (attackedSquare.hasBeenAttacked) {\n        return \"Already attacked this square\";\n        // If it hasn't been attacked, checking if a ship exists on that square\n      } else if (attackedSquare.hasShip && !attackedSquare.hasBeenAttacked) {\n        attackedSquare.hasBeenAttacked = true;\n        return \"Congrats you hit a ship!\";\n        // If no ship exists on that square, return a miss\n      } else {\n        attackedSquare.hasBeenAttacked = true;\n        return \"Sorry you missed\";\n      }\n    }\n  };\n};\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://odin-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n//# sourceURL=webpack://odin-battleship/./src/main.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("var Ship = function Ship(length) {\n  var isSunk = false;\n  var hits = 0;\n  return {\n    length: length,\n    hits: hits,\n    isSunk: isSunk,\n    checkIfSunk: function checkIfSunk() {\n      if (hits >= length) {\n        this.isSunk = true;\n      }\n    },\n    hitShip: function hitShip() {\n      this.hits = this.hits += 1;\n      this.checkIfSunk();\n    }\n  };\n};\nmodule.exports = Ship;\n\n//# sourceURL=webpack://odin-battleship/./src/ship.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;