const Gameboard = require("../modules/gameboard");

test("Gameboard factory function returns a board with 100 length", () => {
  expect(Gameboard().board.length).toEqual(100);
});

test("If addShip method will update board hasShip object param on x axis", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(2, "x", 3);
  expect(newGameBoard.board[2].hasShip).toBe(true);
});

test("If addShip method will update board hasShip object param on y axis", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(2, "y", 3);
  expect(newGameBoard.board[21].hasShip).toBe(true);
});

test("addShip method will return message if requested squares is outside board (x axis)", () => {
  const newGameBoard = Gameboard();
  expect(newGameBoard.addShip(8, "x", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("addShip method will return message if requested squares is outside board (y axis)", () => {
  const newGameBoard = Gameboard();
  expect(newGameBoard.addShip(88, "x", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("AddShip method cannot overlap existing ships (x axis)", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(2, "x", 4);
  expect(newGameBoard.addShip(4, "x", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("AddShip method cannot overlap existing ships (y axis)", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(4, "y", 4);
  expect(newGameBoard.addShip(14, "y", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("AddShip method cannot overlap existing ships on y axis from x axis", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(4, "y", 4);
  expect(newGameBoard.addShip(2, "x", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("AddShip method cannot overlap existing ships x axis from y axis", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(4, "x", 4);
  expect(newGameBoard.addShip(6, "y", 4)).toBe(
    "Your ship cannot be placed here"
  );
});

test("If a square is attacked for the first time, update has been attacked", () => {
  const newGameBoard = Gameboard();
  newGameBoard.receiveAttack(2);
  expect(newGameBoard.board[1].hasBeenAttacked).toBe(true);
});

test("If a square with a ship has been attacked for the first time, return congrats", () => {
  const newGameBoard = Gameboard();
  newGameBoard.addShip(2, "x", 1);
  expect(newGameBoard.receiveAttack(2)).toBe("Congrats you hit a ship!");
});

test("If a square without a ship has been attacked for the first time, return a miss", () => {
  const newGameBoard = Gameboard();
  expect(newGameBoard.receiveAttack(2)).toBe("Sorry you missed");
});

test("If a square has already been attacked, return a already attacked message", () => {
  const newGameBoard = Gameboard();
  expect(newGameBoard.receiveAttack(2));
  expect(newGameBoard.receiveAttack(2)).toBe("Already attacked this square");
});
