const Ship = require("../modules/ship");

const placeShips = (gameboard, player, gameStart) => {
  const mainDiv = document.getElementById("mainDiv");

  if (player) {
    let axis = "x";
    let shipLength = 0;
    let squareId = 0;
    let currentShip = null;
    let addedShips = 0

    // Adding classes to each ship square to show them on the board
    const showShipsOnBoard = () => {
      for (let i = 0; i < gameboard.board.length; i++)
        if (gameboard.board[i].hasShip) {
          const squares = document.querySelectorAll(".playerSquare");
          squares.forEach((square) => {
            if (square.id == gameboard.board[i].id) {
              square.classList.add("activeShip");
            }
          });
        }
    };

    // Creating the dock for our ships so they can be drag & dropped
    const shipDockDiv = document.createElement("div");
    shipDockDiv.classList.add("shipDockDiv");
    mainDiv.prepend(shipDockDiv);
    const shipDock = document.createElement("div");
    shipDock.classList.add("shipDock");
    shipDock.id = "shipDock";
    shipDockDiv.appendChild(shipDock);
    // Creating our ship array
    const carrier = Ship(5, "carrier");
    const battleship = Ship(4, "battleship");
    const submarine = Ship(3, "submarine");
    const cruiser = Ship(3, "cruiser");
    const destroyer = Ship(2, "destroyer");
    let ships = [carrier, battleship, submarine, cruiser, destroyer];
  
    // Itterating over each ship and making them drag & droppable
    ships.forEach((ship) => {
      const newShip = document.createElement("div");
      newShip.classList.add("ship");

      const draggableArea = document.createElement("div");
      draggableArea.classList.add("draggable");
      draggableArea.id = `${ship.name}`;
      draggableArea.setAttribute("length", `${ship.length}`);
      draggableArea.setAttribute("draggable", true);
      newShip.appendChild(draggableArea);

      for (let i = 0; i < ship.length; i++) {
        const shipSquare = document.createElement("div");
        shipSquare.classList.add("shipSquare");
        draggableArea.appendChild(shipSquare);
      }
      shipDock.appendChild(newShip);
    });

    // Create button to change axis
    const axisBtn = document.createElement("button");
    axisBtn.innerText = `Change Axis to ${axis == "x" ? "Y" : "X"}`;
    shipDockDiv.prepend(axisBtn);
    const draggableItems = document.querySelectorAll(".draggable");
    // Add event listener to axis button to change axis and button text
    axisBtn.addEventListener("click", () => {
      if (axis == "x") {
        axis = "y";
        shipDock.classList.add("flex");
        draggableItems.forEach((ship) => {
          ship.classList.add("flexDirectionY");
        });
      } else if (axis == "y") {
        shipDock.classList.remove("flex");
        axis = "x";
        draggableItems.forEach((ship) => {
          ship.classList.remove("flexDirectionY");
        });
      }
      axisBtn.innerText = `Change Axis to ${axis == "x" ? "Y" : "X"}`;
    });

    // Add event listener for draggable elements
    draggableItems.forEach((draggable) => {
      draggable.addEventListener("dragstart", (event) => {
        draggable.classList.add("dragging");
        currentShip = event.target.id;
      });
      // On drag end, add the ship to the gameboard
      draggable.addEventListener("dragend", (event) => {
        const ship = ships.find(ship => (ship.name == event.target.id))

        if (shipLength != 0 || squareId != 0) {
          if (gameboard.addShip(squareId, axis, ship.length, ship) == "Valid") {
            event.target.parentElement.remove();
            gameboard.addShip(squareId, axis, ship.length, ship);
            showShipsOnBoard();
            addedShips++
            if (addedShips == 5) {
              shipDockDiv.classList.add("hidden");
              gameStart();
            } 
          } else {
            console.log("Invalid placement for ship");
          }
        }
      });
    });
    // Setting or ship length & square Id to 0 if user drags ship outside gameboard
    const playBoard = document.querySelector(".playerOneGameboard");
    playBoard.addEventListener("dragleave", (event) => {
      if (event.clientX == 0 || event.clientY == 0) {
        return;
      } else {
        shipLength = 0;
        squareId = 0;
      }
    });

    // Keep track of what elements were last touched
    const playerSquares = document.querySelectorAll(".playerSquare");
    playerSquares.forEach((square) => {
      square.addEventListener("dragover", (event) => {
        const draggable = document.querySelector(".dragging");
        shipLength = parseInt(draggable.getAttribute("length"));
        squareId = parseInt(event.target.id);
      });
    });
  } else {
    // Creating our ship array for computer ships
    const carrier = Ship(5, "carrier");
    const battleship = Ship(4, "battleship");
    const submarine = Ship(3, "submarine");
    const cruiser = Ship(3, "cruiser");
    const destroyer = Ship(2, "destroyer");
    let ships = [carrier, battleship, submarine, cruiser, destroyer];
    // Placing our computer ships on the board
    while (ships.length > 0) {
      ships.forEach((ship) => {
        let squareId = parseInt(Math.random() * 99 + 1);
        let randomAxisNum = parseInt(Math.random() * 101);
        let axis = randomAxisNum > 50 ? "x" : "y";
        let valid = false
   
        // If the randomly generated square ID and axis combo is valid, place ship
        if (gameboard.addShip(squareId, axis, ship.length, ship) == "Invalid") {
          return;
        } else {
          gameboard.addShip(squareId, axis, ship.length, ship);
          ships = ships.filter((a) => a !== ship);
          valid = true;
        }
      });
    }
  }
};

export default placeShips;
