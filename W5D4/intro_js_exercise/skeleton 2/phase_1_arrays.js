Array.prototype.uniq = function () {
  const arr = [];
  for(let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }

  return arr;
};

Array.prototype.twoSum = function () {
  const arr = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        arr.push([i, j]);
      }
    }
  }

  return arr;
};

Array.prototype.transpose_square = function() {
  let result = [];
  debugger;
  for(let i = 0; i < this.length; i++) {
    result.push([]);
  }
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this.length; j++) {
      result[i].push(this[j][i]);
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  debugger;
  for(let i = 0; i < this[0].length; i++) {
    result.push([]);
  }
  for(let i = 0; i < this[0].length; i++) {
    for(let j = 0; j < this.length; j++) {
      result[i].push(this[j][i]);
    }
  }
  return result;
};
