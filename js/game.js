$(document).ready(function() {

  var board = new Board();

  [].concat.apply([], board.grid).forEach(function(num, index) {
    if(num === 0) {
      num = "";
    }
    $("table tr:nth-child(" + Math.floor(index / 4 + 1) + ") td:nth-child(" + (index % 4 + 1) + ")").text(num);
  });

  $('body').on('keyup', function(event) {
    //Left
    if( event.which == 37 ) {
      board.move("left");
    }//Right
    else if( event.which == 39 ) {
      board.move("right");
    }//Up
    else if( event.which == 38 ) {
      board.move("up");
    }//Down
    else if( event.which == 40 ) {
      board.move("down");
    }

    [].concat.apply([], board.grid).forEach(function(num, index) {
      if(num === 0) {
        num = "";
      }
      $("table tr:nth-child(" + Math.floor(index / 4 + 1) + ") td:nth-child(" + (index % 4 + 1) + ")").text(num);
    });
  });


});
