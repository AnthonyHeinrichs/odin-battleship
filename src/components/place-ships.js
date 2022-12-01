const Ship = require("../modules/ship");

const placeShips = (
  gameboard,
  player,
  playerOneShips,
  playerTwoShips,
  gameStart
) => {
  const shipDockDiv = document.getElementById("shipDockDiv");
  shipDockDiv.classList.remove("hidden");
  const playerTwoDiv = document.getElementById("playerTwoDiv");

  if (player) {
    let axis = "x";
    let shipLength = 0;
    let squareId = 0;
    let currentShip = null;
    let addedShips = 0;

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

    // Creating our ship array

    const shipDock = document.getElementById("shipDock");
    // Itterating over each ship and making them drag & droppable
    playerOneShips.forEach((ship) => {
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
    const axisBtn = document.getElementById("axisBtn");

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
      axisBtn.innerText = "Rotate";
    });

    // Add event listener for draggable elements
    draggableItems.forEach((draggable) => {
      draggable.addEventListener("dragstart", (event) => {
        draggable.classList.add("dragging");
        currentShip = event.target.id;
      });
      // On drag end, add the ship to the gameboard
      draggable.addEventListener("dragend", (event) => {
        const ship = playerOneShips.find(
          (ship) => ship.name == event.target.id
        );

        if (shipLength != 0 || squareId != 0) {
          if (gameboard.addShip(squareId, axis, ship.length, ship) == "Valid") {
            event.target.parentElement.remove();
            gameboard.addShip(squareId, axis, ship.length, ship);
            showShipsOnBoard();
            addedShips++;
            if (addedShips == 5) {
              shipDockDiv.classList.add("hidden");
              playerTwoDiv.classList.remove("hidden");
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
    // Placing our computer ships on the board
    while (playerTwoShips.length > 0) {
      playerTwoShips.forEach((ship) => {
        let squareId = parseInt(Math.random() * 99 + 1);
        let randomAxisNum = parseInt(Math.random() * 101);
        let axis = randomAxisNum > 50 ? "x" : "y";
        let valid = false;

        // If the randomly generated square ID and axis combo is valid, place ship
        if (gameboard.addShip(squareId, axis, ship.length, ship) == "Invalid") {
          return;
        } else {
          gameboard.addShip(squareId, axis, ship.length, ship);
          playerTwoShips = playerTwoShips.filter((a) => a !== ship);
          valid = true;
        }
      });
    }
  }
};

export default placeShips;
