let range = function (start, end) {
  if (start === end) {
    return [start];
  }
  let rest = range(start, end - 1);
  rest.push(end);
  return rest;
};

let sumRec = function (arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumRec(arr.slice(1, arr.length));
};

let exponent = function (base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp - 1);
};


let exponent2 = function (base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2),  2);
  } else {
    // return base * (exponent2(base, Math.pow((exp - 1) / 2), 2);
    return base * Math.pow( exponent2(base, (exp-1)/2), 2 );
  }
};

// 1, 1, 2, 3, 5, 8, 13, 21, 34

let fib = function (n) {
  if (n === 0 || n === 1) return 1;
  return fib(n - 2) + fib(n - 1);
};

let fibonacci = function (n) {
  const result = [];
  for(let i = 0; i <  n; ++i) {
    result.push(fib(i));
  }
  return result;
};

let deepDup = function (arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      result.push(deepDup(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

let bsearch = function (arr, target) {
  if (arr.length === 0) return -1;

  let midIdx = arr.length / 2;
  let midElement = arr[midIdx];

  if (midElement === target) return midIdx;

  if (midElement > target) {
    return bsearch(arr.slice(0, midIdx), target);
  }

  return bsearch(arr.slice(midIdx, arr.length), target);
};

let mergesort = function (arr) {
  if (arr.length === 1) return arr;
  let left = mergesort(arr.slice(0, arr.length/2));
  let right = mergesort(arr.slice(arr.length/2, arr.length));

  return merge(left, right);
};

let merge = function(left, right) {
  const merged = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  while (left.length > 0) merged.push(left.shift());
  while (right.length > 0) merged.push(right.shift());
  return merged;
};

Array.prototype.uniq = function () {
  const arr = [];
  for(let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }

  return arr;
};
