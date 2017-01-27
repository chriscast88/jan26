var dance = function(toe){
  choreograph(moves);
}

var choreograph = function (moves){
  Object.keys(moves).forEach(function(key){
    var move = moves[key];
    console.log(move);
  })
}

var choreograph = function (moves) {
  var movesArray = Object.keys(moves);
  for (var i = 0; i<movesArray; i++){
    var key = movesArray[i];
    var move = moves[key];
    console.log(move);
  }
}


moves = {
  pirouette: 'a one legged spin in multiples of 360 degrees',
  chaCha: 'a latin dance: shuffle your feet forward. It\'s all about the hips',
  pique: 'you strike the floor with your toe'
}

dance(moves);
