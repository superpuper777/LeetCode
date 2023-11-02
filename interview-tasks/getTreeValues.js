// const tree = {
//   value: 1,
//   children: [
//     {
//       value: 2,
//       children: [{ value: 3 }],
//     },
//     {
//       value: 4,
//       children: [{ value: 5 }, { value: 6 }],
//     },
//   ],
// };

// function getTreeValues(tree) {}

// console.log(getTreeValues(tree)); // => [1,2,3,4,5,6]

/*
1) рекурсивно
2) воспользоваться стеком 
Если большая вложенность то лучше воспольз стеком
*/

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3 }],
    },
    {
      value: 4,
      children: [{ value: 5 }, { value: 6 }],
    },
  ],
};

// function getTreeValues(tree) {
//   const stack = [tree];
//   console.log(stack);
//   const result = [];
//   while (stack.length > 0) {
//     const node = stack.pop();
//     console.log(node);
//     if (node.value !== undefined) {
//       result.push(node.value);
//     }
//     if (node.children?.length) {
//       stack.push(...node.children);
//     }
//   }
//   return result;
// }

// console.log(getTreeValues(tree)); // => [1,2,3,4,5,6]

//https://www.youtube.com/watch?v=hkrmyIecHR0

//чтобы сделать нужный порядок

function getTreeValues(tree) {
  const stack = [tree];
  const result = [];
  for (let i = 0; i < stack.length; i++) {
    while (stack.length > 0) {
      if (stack[i]?.value !== undefined) {
        result.push(stack[i]?.value);
      }
      break;
    }

    if (stack[i]?.children?.length) {
      stack.push(...stack[i]?.children);
    }
  }
  return result;
}
console.log(getTreeValues(tree)); // => [1,2,3,4,5,6]
