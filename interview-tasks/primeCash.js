let primeCashe = {
  1: false,
};

const isPrime = (n) => {
  if (typeof primeCashe[n] === "boolean") {
    return primeCashe[n];
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      primeCashe[n] = false;
      return false;
    }
  }
  primeCashe[n] = true;
  return true;
};

console.log(primeCashe);
isPrime(997); // true
console.log(primeCashe);
isPrime(997); // true (from cache)
console.log(primeCashe);
isPrime(997); // true (from cache)
isPrime(97);
isPrime(12);
console.log(primeCashe);

//этот пример нарушает всю "чистоту" функции можно это исправить путем IIFE (Immediately Invoked Function Expression)

// const isPrime = (() => {
//     let primeCache = {
//       1: false
//     }

//     return function (n) {
//       if (typeof primeCache[n] === 'boolean') {
//         return primeCache[n]
//       }

//       for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           primeCache[n] = false
//           return false
//         }
//       }

//       primeCache[n] = true
//       return true
//       }
//   })();
