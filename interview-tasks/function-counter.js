/* console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2 и тд т/е при каждом вызове увелич на единицу
*/

const getId = () => {
  let id = 0;
  return function () {
    return id++;
  };
};

const id = getId();
console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3
console.log(id()); // 4
