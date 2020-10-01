
exports.min = function min (array) {
    if (!array || array.length === 0){
        return 0;
    } else
    {return array.reduce((minNumber, item) => {
      if (item < minNumber) {
          return item;
      } else return minNumber;
  }, Infinity);}
}

exports.max = function max (array) {
    if (!array || array.length === 0){
        return 0;
    } else {
    return array.reduce((maxNumber, item) => {
    if (item > maxNumber) {
        return item;
    } else return maxNumber;
}, -Infinity);}

}

exports.avg = function avg (array) {
    if (!array || array.length === 0){
        return 0;
    } else {
        let average = array.reduce((sum, item) => sum + item, 0);
        return (average / array.length);
    }
}
