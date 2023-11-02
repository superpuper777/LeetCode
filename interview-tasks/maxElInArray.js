const getMaxEl = (arr) => {
  return arr.reduce((prev, cur) => (prev > cur ? prev : cur));
};

const getMinEl = (arr) => {
  return arr.reduce((prev, cur) => (prev < cur ? prev : cur));
};

console.log(getMaxEl([1, 3, 7, 2, 9, 5]));
console.log(getMinEl([1, 3, 7, 2, 9, 5]));

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];

    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }
  }

  return { min, max };
}

console.log(findMinMax([1, 3, 7, 2, 9, 5]));
