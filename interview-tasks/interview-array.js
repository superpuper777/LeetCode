//reverse array without method reverse()

const array = [1, 4, 7, 2, 4];

const reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}

console.log(reversed);

//или map

const reversed2 = array.map((el, index, arr) => arr[arr.length - 1 - index]);
console.log(reversed2);

//удалить falsy из массива

const arr = [7, "correct", 0, false, 9, NaN, ""];

console.log(arr.filter((el) => !!el));
//console.log(arr.filter((el) => Boolean(el)));
// console.log(arr.filter(Boolean)); филтер передаст элемент массива а булен более аргументов не принимает поэтому все сработает как надо
