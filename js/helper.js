var rotate = function(array, rotateRight) {
  finalArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray = [];
    for (var j = 0; j < array[0].length; j++) {
      newArray.push(array[j][i]);
    }
    if (rotateRight) {
      finalArray.push(newArray.reverse());
    } else {
      finalArray.push(newArray);
    }
  }

    return rotateRight ? finalArray : finalArray.reverse();
};
