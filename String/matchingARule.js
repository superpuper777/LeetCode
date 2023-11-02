/*1773. Count Items Matching a Rule
Easy

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

    ruleKey == "type" and ruleValue == typei.
    ruleKey == "color" and ruleValue == colori.
    ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.

 

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

 

Constraints:

    1 <= items.length <= 104
    1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
    ruleKey is equal to either "type", "color", or "name".
    All strings consist only of lowercase letters.

*/

const countMatches = (items, ruleKey, ruleValue) => {
  const obj = {};
  let count = 0;
  const arr = ['type', 'color', 'name'];
  items.map((i) => {
    for (let j = 0; j < i.length; j++) {
      obj[arr[j]] = i[j];
    }
    if (obj[ruleKey] === ruleValue) {
      count++;
    }
  });
  return count;
};

//other options

// let ruleKeys = ["type", "color", "name"];
//   return items.filter(e =>e[ruleKeys.indexOf(ruleKey)] === ruleValue ).length;

// let count=0;
//     let index = -1;
//     if(ruleKey === 'type')  index = 0;
//     if(ruleKey === 'color') index = 1;
//     if(ruleKey === 'name')  index = 2;

//     items.forEach(item =>{
//         if(item[index] === ruleValue) count++;
//     })
//     return count;

// let count = 0;
//     let indexes = {
//         "type": 0,
//         "color": 1,
//         "name": 2
//     }
//     for (let item of items) {
//         if (item[indexes[ruleKey]] === ruleValue) count++;
//     }
//     return count

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'lenovo'],
      ['phone', 'gold', 'iphone'],
    ],
    'color',
    'silver'
  )
);

console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ],
    (ruleKey = 'type'),
    (ruleValue = 'phone')
  )
);
// const arr = ['zero', 'one', 'two'];

// const obj1 = Object.assign({}, arr);
// console.log(obj1); // 👉️ {0: 'zero', 1: 'one', 2: 'two'}

// const arr = ['zero', 'one', 'two'];

// const obj = {};

// arr.forEach((element, index) => {
//   obj[`key${index}`] = element;
// });

// 👇️️ {'key0': 'zero', 'key1': 'one', 'key2': 'two'}
// console.log(obj);
// let count = 0;
// const obj = {};
// const ruleValue = 'blue';
// const ruleKey = 'color';

// const items = ['phone', 'blue', 'pixel'];
// const arr = ['type', 'color', 'name'];

// for (let index = 0; index < items.length; index++) {
//   obj[arr[index]] = items[index];
//   console.log(obj);
//   if (obj[ruleKey] == ruleValue) {
//     console.log(count);
//     // count++;
//   }
//}
// console.log(count);

// 👇️ { '0': 'bobby', '1': 'hadz', '2': 'com' }
// console.log(obj);

// const countMatches = (items, ruleKey, ruleValue) => {
//   const obj = {};
//   let count = 0;
//   const arr = ['type', 'color', 'name'];
//   items.map((i) => {
//     for (let j = 0; j < i.length; j++) {
//       obj[arr[j]] = i[j];
//       // console.log(obj);
//       // if (obj[ruleKey] == ruleValue) {
//       //   console.log(count);
//       //   count++;
//       // }
//       // console.log(count);
//     }
//     // console.log(obj);
//     if (obj[ruleKey] === ruleValue) {
//       count++;
//     }
//   });
//   console.log(count);
//   return count;
// };
