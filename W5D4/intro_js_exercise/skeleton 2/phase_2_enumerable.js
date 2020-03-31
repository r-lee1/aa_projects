Array.prototype.myEach = function (cb) {
  for(let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  const result = [];
  for(let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }

  return result;
};

Array.prototype.myReduce = function (cb, acc = this[0]) {

  for(let i = 0; i < this.length; i++) {
    if (i === 0 && acc === this[0])
      i++;
    acc = cb(acc, this[i]);
  }
  return acc;
};
