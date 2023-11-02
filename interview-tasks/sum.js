const array = [1, 2, 2, 4, 5, 6, 6, 6];

let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
// console.log(sum);

//prev = array[0]
let b = array.reduce(function (prev, item) {
  return prev + item;
}, 0);
console.log(b);

//упростим

let c = array.reduce((prev, curr) => prev + curr, 0);
console.log(c);
/* 
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
*/
//нахождение макс значения

let max = array[0];
let index = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    index = i;
  }
}
console.log(max, index);

let d = array.reduce((prev, item) => {
  if (prev < item) {
    return item; //это значение запишется внутрь prev
  } else return prev;
});
// console.log(d);

//или
let d3 = array.reduce((acc, next) => (acc > next ? acc : next));
// console.log("dfs:", d3);
//или

let d2 = array.reduce((acc, next) => Math.max(acc, next));

let e = array.reduce(
  (prev, item, index) => {
    if (item > prev[1]) {
      return [index, item];
    } else return prev;
  },
  [0, array[0]] //тут массив!
);
// console.log(e);

const getMax = (a, b) => Math.max(a, b);
console.log([1, 100].reduce(getMax, 50)); // 100

//или использовать метод сорт
/*Для числового сравнения, вместо строкового, функция сравнения может просто вычитать b из a.
 Следующая функция будет сортировать массив по возрастанию:
 function compareNumbers(a, b) {
  return a - b;
}
Метод sort можно удобно использовать с функциональными выражениями (и замыканиями):
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]

+ let max = array.pop()
*/
const data = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 7],
];

const flat = data.reduce((prev, item) => {
  return prev.concat(item);
}, []);

console.log(flat);
console.log([...new Set(flat)]);

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  return total / array.length;
}, 0);

const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
doubled; // [59.52, 83.7, 93]

В; /* Ведём учёт данных с помощью reduce
Когда использовать: когда у вас есть коллекция данных и вам надо узнать то, сколько типов каждого 
элемента находится в этой коллекции.*/

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];
const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});
count; // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
