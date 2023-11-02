const removeDuplicates = (nums) => {
  console.log([...new Set(nums)]);
  return [...new Set(nums)].length, [...new Set(nums)];
};

const removeDuplicates2 = (nums) => {
  return nums.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
};

const removeDuplicates10 = function (nums) {
  for (let i = 0; i < nums.length; ) {
    nums[i] === nums[i + 1] ? nums.splice(i, 1) : i++;
  }
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log("dsfsfr", removeDuplicates10([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

//(unique.includes(item) ? unique : [...unique, item]

const removeDuplicates3 = (nums) => {
  const mapped = nums.map((el, i) => {
    return { index: i, value: el };
  });
  console.log(mapped);
  //   return nums.reduce((result, curr) => {
  //     return result.includes(curr);
  //     //  Array.isArray(result)
  //     //   ? result.includes(curr.value)
  //     //     ? curr.value
  //     //     : (result[curr.index] = curr.value)
  //     //   : "dgdg";
  //   }, []);

  return mapped.reduce(
    (unique, item) =>
      unique.includes(item.value) ? unique : [...unique, item?.value],
    //   unique.includes(item.value) ? unique : (unique[15] = item.value),
    []
  );
};

// console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates2([1, 1, 2]));

// const data = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [5, 6, 7],
// ];

// const flat = data.reduce((prev, item) => {
//   return prev.includes(item);
//   //   return prev.concat(item);
// }, []);

// console.log(flat);
// console.log([...new Set(flat)]);

// Using Array splice method
const removeDuplicates4 = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
    return nums;
  }
};
console.log(removeDuplicates4([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/*Time Complexity: O(n^2) in the worst case, as each splice operation takes O(n) time in the worst case. The overall algorithm performs n-1 splice operations in the worst case, making the time complexity O(n^2).
Space Complexity: O(1), as the array is modified in place.
----------------------------------------------------------------------*/

// For loop with continue
const removeDuplicates5 = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] === nums[i]) continue; // If the elements are equal then continue else copy the unique element by then to "i+1" position
    nums[++i] = nums[j];
  }
  return i + 1;
};

/*Time Complexity: O(n), as we iterate over the array once and perform a constant-time operation for each element.
Space Complexity: O(1), as the array is modified in place.
----------------------------------------------------------------------*/

// For loop
const removeDuplicates6 = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      //  If the elements are not equal then copy the unique element by then to "i+1" position
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};

/*Time Complexity: O(n), as we iterate over the array once and perform a constant-time operation for each element.
Space Complexity: O(1), as the array is modified in place.
----------------------------------------------------------------------*/

// While loop
const removeDuplicates7 = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
    j++;
  }
  return i + 1;
};

/*Time Complexity: O(n), as we iterate over the array once and perform a constant-time operation for each element.
Space Complexity: O(1), as the array is modified in place./*

----------------------------------------------------------------------*/
var removeDuplicates8 = function (nums) {
  if (nums.length <= 1) {
    return nums.length;
  }
  var k = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

var removeDuplicates9 = function (nums) {
  let i = 1;

  while (i < nums.length) {
    if (nums[i - 1] == nums[i]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};
