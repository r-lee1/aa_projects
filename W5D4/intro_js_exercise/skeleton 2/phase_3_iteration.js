Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(let i = 0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        // SWAP
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  const substrings = [];
  for (let i = 0; i < this.length; ++i) {
    for (let j = i+1; j < this.length+1; ++j) {
      substrings.push(this.slice(i,j));
    }
  }
  return substrings;
};
