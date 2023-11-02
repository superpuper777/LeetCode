// const fetchUrl = (url) => {
//   console.log(`fetching ${url}...`);
// };

// function debounce() {}

// const fetching = debounce(fetchUrl, 300);
// fetching(1);
// fetching(2);
// fetching(3);
// fetching(4);
// fetching(5);

// нужно увидеть в консоли только fetch 5

// const fetchUrl = (url) => {
//   console.log(`fetching ${url}...`);
// };

// function debounce(callback, delay) {
//   let timer = null;
//   console.log('SFgfres');
//   return (...args) => {
//     console.log(timer);
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

// const fetching = debounce(fetchUrl, 300);
// fetching(1);
// fetching(2);
// fetching(3);
// fetching(4);
// fetching(5);

// Для отметы setTimeout() есть специальная функция clearTimeout(). Она принимает на вход идентификатор таймаута, который возвращает setTimeout() и останавливает таймер (переданный колбэк не выполнится).

// // запускаем таймер
// const timerId = setTimeout(() => console.log('hello!'), 1000);
// // останавливаем таймер
// clearTimeout(timerId);

/* 
Решение:
Проанализировав данный код и ожидаемый рез-т (вернуть только последнее значение), мы понялі что: 
1) const fetching = debounce(fetchUrl, 300);
fetching это вызов фукціі но он імеет аргумент  fetching(1);
Значіт function debounce должна вернуть фукцію (і в нее мы передаем этот аргумент)
return (...args) => {
   ...setTimeout(() => {
      callback(...args);
    }, delay);
  };
  где callback(...args) і есть моя функція fetchUrl 

2) Чтобы пропустіть все сеттаймаут, кроме последнего нам нужен метод clearTimeout()
і  переменная timer, наогул clearTimeout() dпрінімает параметр timeoutID 
Идентификатор тайм-аута, который вы хотите отменить. 
Этот идентификатор был возвращен соответствующим вызовом setTimeout().!!!

Это значіт что мы спеціально указываем timer = null, а потом делаем проверку на налічіе timeoutID
еслі імеется ( а это прі самом первом вызове fetching(1)), то setTimeout стірает
все значенія до последнего так как там устанавлівается новое значченіе setTimeout 
і больше нет вызова fetching  */

/* 
дополненіе

const user = {
  firstName: 'Bob'
};
сделать так ччобы в конце пятерки появлялся Боб
*/

// const fetchUrl = (url) => {
//   console.log(`fetching ${url}...`, this.firstName);
// };

const fetchUrl = function (url) {
  console.log(`fetching ${url}...`, this.firstName);
};

const user = {
  firstName: 'Bob',
};

function debounce(callback, delay) {
  let timer = null;
  console.log('SFgfres');
  return (...args) => {
    console.log(timer);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl.bind(user), 300);
fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);

/* 
Например, в приведённом ниже коде мы вызываем sayHi в контексте различных объектов: 
sayHi.call(user) запускает sayHi, передавая this=user, 
а следующая строка устанавливает this=admin:

function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// используем 'call' для передачи различных объектов в качестве 'this'
sayHi.call( user ); // John
sayHi.call( admin ); // Admin

Решение:
изменяем стрелочную функцию на анонимную и используем bind(user) в вызове 
const fetching = debounce(fetchUrl.bind(user), 300);

Если поменять const fetching = debounce(fetchUrl.bind({}), 300); объект юзера? Что будет

bind запоминает только ПЕРВЫЙ контекст
*/
