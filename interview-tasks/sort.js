/* Итак, функция сравнения имеет следующую форму:

JS
Copy to Clipboard

function compare(a, b) {
  if (a меньше b по некоторому критерию сортировки) {
    return -1;
  }
  if (a больше b по некоторому критерию сортировки) {
    return 1;
  }
  // a должно быть равным b
  return 0;
}
Для числового сравнения, вместо строкового, функция сравнения может просто вычитать b из a. Следующая функция будет сортировать массив по возрастанию:

JS
Copy to Clipboard

function compareNumbers(a, b) {
  return a - b;
}
*/

// const array = [1, 5, 2, 8, 2];
// console.log(array.sort((x1, x2) => x2 - x1));

//в случае с объектами аналогично

const users = [
  { name: "John", age: 20 },
  { name: "alena", age: 22 },
];

// console.log(users.sort((u1, u2) => u1.age - u2.age));
//это работает только с числовыми значениями, если надо сравнить строки:

/*
Алгоритм сравнения двух строк довольно прост:

Сначала сравниваются первые символы строк.
Если первый символ первой строки больше (меньше), чем первый символ второй, 
то первая строка больше (меньше) второй. Сравнение завершено.
Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
Сравнение продолжается, пока не закончится одна из строк.
Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.
В примерах выше сравнение 'Я' > 'А' завершится на первом шаге, тогда как строки 'Коты' и 
'Кода' будут сравниваться посимвольно:

К равна К.
о равна о.
т больше, чем д. На этом сравнение заканчивается. Первая строка больше.
*/
console.log(
  users.sort((u1, u2) => {
    if (u1 < u2) {
      return -1;
    }
    if (u1 == u2) {
      return 0;
    }
    return 1;
  })
);

/*однако если сравнить заглавную букву и прописную то уже работает неправильно можно 
привести все к строчным*/

console.log(
  users.sort((u1, u2) => {
    if (u1.name.toLowerCase() < u2.name.toLowerCase()) {
      return -1;
    }
    if (u1.name.toLowerCase() == u2.name.toLowerCase()) {
      return 0;
    }
    if (u1.name.toLowerCase() < u2.name.toLowerCase()) {
      return 1;
    }
  })
);

//но можно воспользоваться методом localeCompare
console.log(
  users.sort((u1, u2) => {
    return u1.name.localeCompare(u2.name);
  })
);

/*

Пример: сортировка c помощью map
Функция сравнения (compareFunction) может вызываться несколько раз для каждого элемента в массиве.
 В зависимости от природы функции сравнения, это может привести к высоким расходам ресурсов. 
 Чем более сложна функция сравнения и чем больше элементов требуется отсортировать,
  тем разумнее использовать map для сортировки. Идея состоит в том, 
  чтобы обойти массив один раз, чтобы извлечь фактические значения,
   используемые для сортировки, во временный массив, отсортировать временный массив,
    а затем обойти временный массив для получения правильного порядка.

*/

const list = ["Дельта", "альфа", "ЧАРЛИ", "браво"];

// временный массив содержит объекты с index и значением сортировки
const mapped = list.map((el, i) => {
  return { index: i, value: el.toLowerCase() };
});
console.log(mapped);

// сортируем mapped массив
mapped.sort((a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
});
console.log(mapped);
// контейнер для результа

const result = mapped.map((el) => list[el.index]);

// const result = mapped.map(
//   (el) => {
//     return list[el.index];
//   }
//без return будет [ undefined, undefined, undefined, undefined ]
//);

console.log(result);

//а можно все это сделать так:

console.log(
  list.sort((a, b) => {
    return a.localeCompare(b);
  })
);
