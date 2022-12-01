const Player = (id, ifAi) => {
  let aiHit = false;
  let hitLeft = false;
  let hitRight = false;
  let hitBot = false;
  let hitTop = false;
  let firstHitNum = null;
  let lastHitNum = null;
  let nums = Array.from({ length: 100 }, (_, i) => i + 1);

  let isTurn = false;
  const playerId = id;
  const ai = ifAi;

  return {
    isTurn: isTurn,
    playerId: playerId,
    ai: ai,
    setTurn() {
      this.isTurn = !this.isTurn;
    },
    aiAttack(gameboard, playerOne, playerTwo, showAttacks) {
      if (aiHit == false) {
        let ranNum = Math.floor(Math.random() * nums.length);
        if (gameboard.receiveAttack(nums[ranNum]) == "Ship hit") {
          aiHit = true;
        }
        lastHitNum = nums[ranNum];
        firstHitNum = nums[ranNum];
        nums.splice(ranNum, 1);
        showAttacks(playerTwo, gameboard);
      } else if (aiHit == true) {
        if (hitLeft == true) {
          if (
            gameboard.board[lastHitNum - 2] !== undefined &&
            !gameboard.board[lastHitNum - 2].hasBeenAttacked
          ) {
            if (gameboard.receiveAttack(lastHitNum - 1) == "Ship hit") {
              lastHitNum = lastHitNum - 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitLeft = true;
              showAttacks(playerTwo, gameboard);
            } else {
              lastHitNum = lastHitNum - 1;
              nums = nums.filter((num) => num !== lastHitNum - 1);
              hitLeft = false;
              showAttacks(playerTwo, gameboard);
            }
          } else {
            hitLeft = false;
            this.aiAttack(gameboard, playerOne, playerTwo, showAttacks);
          }
        } else if (hitRight == true) {
          if (
            gameboard.board[lastHitNum] !== undefined &&
            !gameboard.board[lastHitNum].hasBeenAttacked
          ) {
            if (gameboard.receiveAttack(lastHitNum + 1) == "Ship hit") {
              lastHitNum = lastHitNum + 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitRight = true;
              showAttacks(playerTwo, gameboard);
            } else {
              lastHitNum = lastHitNum + 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitRight = false;
              showAttacks(playerTwo, gameboard);
            }
          } else {
            hitRight = false;
            this.aiAttack(gameboard, playerOne, playerTwo, showAttacks);
          }
        } else if (hitTop == true) {
          if (
            gameboard.board[lastHitNum - 11] !== undefined &&
            !gameboard.board[lastHitNum - 11].hasBeenAttacked
          ) {
            if (gameboard.receiveAttack(lastHitNum - 10) == "Ship hit") {
              lastHitNum = lastHitNum - 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitTop = true;
              showAttacks(playerTwo, gameboard);
            } else {
              lastHitNum = lastHitNum - 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitTop = false;
              showAttacks(playerTwo, gameboard);
            }
          } else {
            hitTop = false;
            this.aiAttack(gameboard, playerOne, playerTwo, showAttacks);
          }
        } else if (hitBot == true) {
          if (
            gameboard.board[lastHitNum + 9] !== undefined &&
            !gameboard.board[lastHitNum + 9].hasBeenAttacked
          ) {
            if (gameboard.receiveAttack(lastHitNum + 10) == "Ship hit") {
              lastHitNum = lastHitNum + 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitBot = true;
              showAttacks(playerTwo, gameboard);
            } else {
              lastHitNum = lastHitNum + 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitBot = false;
              showAttacks(playerTwo, gameboard);
            }
          } else {
            hitBot = false;
            this.aiAttack(gameboard, playerOne, playerTwo, showAttacks);
          }
        } else {
          if (
            gameboard.board[firstHitNum - 2] !== undefined &&
            gameboard.board[firstHitNum - 2].hasBeenAttacked == false
          ) {
            if (gameboard.receiveAttack(firstHitNum - 1) == "Ship hit") {
              lastHitNum = firstHitNum - 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitLeft = true;
              showAttacks(playerTwo, gameboard);
            } else {
              gameboard.receiveAttack(firstHitNum - 1);
              lastHitNum = firstHitNum - 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitLeft = false;
              showAttacks(playerTwo, gameboard);
            }
          } else if (
            gameboard.board[firstHitNum] !== undefined &&
            gameboard.board[firstHitNum].hasBeenAttacked == false
          ) {
            if (gameboard.receiveAttack(firstHitNum + 1) == "Ship hit") {
              lastHitNum = firstHitNum + 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitRight = true;
              showAttacks(playerTwo, gameboard);
            } else {
              gameboard.receiveAttack(firstHitNum + 1);
              lastHitNum = firstHitNum + 1;
              nums = nums.filter((num) => num !== lastHitNum);
              hitRight = false;
              showAttacks(playerTwo, gameboard);
            }
          } else if (
            gameboard.board[firstHitNum + 9] !== undefined &&
            gameboard.board[firstHitNum + 9].hasBeenAttacked == false
          ) {
            if (gameboard.receiveAttack(firstHitNum + 10) == "Ship hit") {
              lastHitNum = firstHitNum + 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitBot = true;
              showAttacks(playerTwo, gameboard);
            } else {
              gameboard.receiveAttack(firstHitNum + 10);
              lastHitNum = firstHitNum + 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitBot = false;
              showAttacks(playerTwo, gameboard);
            }
          } else if (
            gameboard.board[firstHitNum - 11] !== undefined &&
            gameboard.board[firstHitNum - 11].hasBeenAttacked == false
          ) {
            if (gameboard.receiveAttack(firstHitNum - 10) == "Ship hit") {
              lastHitNum = firstHitNum - 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitTop = true;
              showAttacks(playerTwo, gameboard);
            } else {
              gameboard.receiveAttack(firstHitNum - 10);
              lastHitNum = firstHitNum - 10;
              nums = nums.filter((num) => num !== lastHitNum);
              hitTop = false;
              showAttacks(playerTwo, gameboard);
            }
          } else {
            let ranNum = Math.floor(Math.random() * nums.length);
            if (gameboard.receiveAttack(nums[ranNum]) == "Ship hit") {
              aiHit = true;
            }
            firstHitNum = nums[ranNum];
            lastHitNum = nums[ranNum];
            nums.splice(ranNum, 1);
            aiHit = false;
            showAttacks(playerTwo, gameboard);
          }
        }
      }
      playerOne.isTurn = true;
      playerTwo.isTurn = false;
    },
  };
};

module.exports = Player;
