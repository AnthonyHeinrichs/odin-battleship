const Ship = require("../modules/ship");

const placeShips = (gameboard, player) => {
  const mainDiv = document.getElementById("mainDiv");

  if (player) {
    let axis = "x";
    let shipLength = 0;
    let squareId = 0;
    let currentShip = null;

    const showShipsOnBoard = () => {
      for (let i = 1; i < gameboard.board.length; i++)
      if (gameboard.board[i].hasShip) {
        const squares = document.querySelectorAll('.playerSquare')
        squares.forEach(square => {
          if (square.id == gameboard.board[i].id) {
            square.classList.add('activeShip')
          }
        })
      }
    }

    // Create ships
    const shipDockDiv = document.createElement("div");
    shipDockDiv.classList.add("shipDockDiv");
    mainDiv.prepend(shipDockDiv);
    const shipDock = document.createElement("div");
    shipDock.classList.add("shipDock");
    shipDock.id = "shipDock";
    shipDockDiv.appendChild(shipDock);

    const carrier = Ship(5, "carrier");
    const battleship = Ship(4, "battleship");
    const cruiser = Ship(3, "cruiser");
    const submarine = Ship(3, "submarine");
    const destroyer = Ship(2, "destroyer");
    const ships = [carrier, battleship, cruiser, submarine, destroyer];

    const removeShip = () => {
      ships.pop()
      if (ships.length == 0) {
        shipDockDiv.classList.add('hidden')
      }
    }

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
        currentShip = event.target.id
      });
      // On drag end, add the ship to the gameboard
      draggable.addEventListener("dragend", (event) => {
        if (shipLength != 0 || squareId != 0) {
          if (gameboard.addShip(squareId, axis, shipLength) == "Valid") {
            event.target.parentElement.remove();
            gameboard.addShip(squareId, axis, shipLength);
            removeShip()
            showShipsOnBoard()
          } else {
            console.log("Invalid placement for ship");
          }
        }
      });
    });

    const playBoard = document.querySelector(".playerGameboard");
    playBoard.addEventListener("dragleave", event => {
      if (event.clientX == 0 || event.clientY == 0) {
        return
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

    // const addShipToBoard = (ship) => {
    //   const playerSquares = document.querySelectorAll('.playerSquare')
    //   playerSquares.forEach(square => {
    //     square.addEventListener('click', event => {
    //       const squareId = parseInt(event.target.id)
    //       if (gameboard.addShip(squareId, axis, ship.length) == 'Valid') {
    //         gameboard.addShip(squareId, axis, ship.length)
    //         console.log(`Your ${ship.name} has been placed`)
    //       } else {
    //         console.log(`Your ${ship.name} can't go there!`)
    //       }
    //     })
    //   })
    // }
  } else {
  }
};

export default placeShips;
