const balancedStringSplit = (s) => {
  let res = 0;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'L') {
      res++;
    } else res--;
    if (res == 0) {
      counter++;
    }
  }
  return counter;
};

console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLRRRLLRLL'));
console.log(balancedStringSplit('LLLLRRRR'));
