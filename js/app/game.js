 // How do blocks spawn? Game starts with two "2" When does the game disallow a movement? How do blocks merge? How do blocks slide? Try to write a specification of how the game mechanics work.(move up, move right, move down, move left) .toString()

function Game(board) {
    this.board = board || '0000202000000000'
}

Game.prototype.toString = function(){
  var gameString =  this.board.substr(0,4) + "\n" +
                    this.board.substr(4,4) + "\n" +
                    this.board.substr(8,4) + "\n" +
                    this.board.substr(12,4) + "\n";
    return gameString;
};

Game.prototype.moveUp = function(){};

Game.prototype.moveDown = function(){};
Game.prototype.moveRight = function(){};
Game.prototype.moveLeft = function(){};
Game.prototype.spawnBlock = function(){};
game = new Game('0000202000000000') // generates a board with the given start
smash array of 4 numbers that makes identical numbers added together

function Game(board) {
  if(board) {
    this.board = board;
  } else {
    this.board = this.generateRandomBoard();
  }
}



Game.prototype.generateRandomBoard = function() {
  var newBoard = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];

  // find two random cells
  randX = Math.floor(Math.random() * 4);
  randY = Math.floor(Math.random() * 4);
  newBoard[randX][randY] = 2;

  randX = Math.floor(Math.random() * 4);
  randY = Math.floor(Math.random() * 4);
  newBoard[randX][randY] = 2;

  return newBoard;
}

Game.prototype.moveLeft = function() {

}