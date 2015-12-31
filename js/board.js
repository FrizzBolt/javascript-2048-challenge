function Board(string) {
  if(string)
    this.grid = this.stringToBoard(string);
  else
    this.grid = this.generateGrid();
}

Board.prototype.generateGrid = function() {
  var new_grid = new Array(4).fill(0);
  for(var x = 0; x < 4; x++) {
    new_grid[x] = new Array(4).fill(0);
  }
  new_grid[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2;
  new_grid[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = 2;

  return new_grid;
};

Board.prototype.move = function(direction) {
  var old = this.grid.slice();
  if (direction === "right") {
    this.shiftBoard(true);
  }
  else if (direction === "left") {
    this.shiftBoard(false);
  }
  else if (direction === "up") {
    this.grid = rotate(this.grid, true);
    this.shiftBoard(true);
    this.grid = rotate(this.grid, false);

  }
  else if (direction === "down") {
    this.grid = rotate(this.grid, false);
    this.shiftBoard(true);
    this.grid = rotate(this.grid, true);
  }
  if (this.toString(old) !== this.toString(this.grid)) {
    this.generateTwos();
  }
};

Board.prototype.shiftBoard = function(right) {
  for(var i = 0; i < this.grid.length; i++) {
    this.moveZeroes(!right, i);
    this.grid[i].reverse();
    this.combineCommons(i);
    this.moveZeroes(right, i);
    this.grid[i].reverse();
  }
};

Board.prototype.moveZeroes = function(moveRight, index) {
  var temp = this.grid[index].filter(function(num) {
    return (num === 0);
  });

  this.grid[index] = this.grid[index].filter(function(num) {
    return (num !== 0);
  });

  this.grid[index] = moveRight ? this.grid[index].concat(temp) : temp.concat(this.grid[index]);
};

Board.prototype.combineCommons = function(index) {
  for (var i = 0; i < this.grid[index].length - 1; i++) {
    if(this.grid[index][i] === this.grid[index][i + 1] && this.grid[index][i] !== 0) {
      this.grid[index][i] *= 2;
      this.grid[index][i + 1] = 0;
    }
  }
};

Board.prototype.toString = function() {
  return this.grid.map(function(row) {
    return row.join("");
  }).join("");
};

Board.prototype.toString = function(array) {
  return array.map(function(row) {
    return row.join("");
  }).join("");
};

Board.prototype.generateTwos = function() {
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);
  while (this.grid[x][y] !== 0) {
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
  }
  this.grid[x][y] = 2 ;
};

Board.prototype.stringToBoard = function(string) {
  var new_grid = new Array(4).fill(0);
  for(var x = 0; x < 4; x++) {
    new_grid[x] = new Array(4).fill(0);
  }
  string.split('').forEach(function(num, index) {
    new_grid[Math.floor(index / 4)][index % 4] = parseInt(num);
  });
  return new_grid;
};
