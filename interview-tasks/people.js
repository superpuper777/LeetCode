/* Необходимо обработать массив таким образом, 
чтобы распределить людей по группам городов*/

// Данные на вход
const people = [
  {
    name: 'Alex',
    city: 'Moscow',
  },
  {
    name: 'Ivan',
    city: 'Moscow',
  },
  {
    name: 'Al',
    city: 'Moscow',
  },
  {
    name: 'Joe',
    city: 'New York',
  },
  {
    name: 'Johan',
    city: 'Berlin',
  },
];

const groupByCity = (array) => {
  const result = {};
  for (let i = 0; i < array.length; i++) {
    if (result.hasOwnProperty(array[i].city)) {
      let oldValue = result[array[i].city];
      console.log(oldValue);
      result[array[i].city] = [oldValue, array[i].name].flat();
    } else result[array[i].city] = array[i].name;
  }
  return result;
};

const groupByCity3 = (array) => {
  const result = {};
  for (item of array) {
    const { name, city } = item;
    if (result.hasOwnProperty(city)) {
      //or use .flat() for oldValue, name].flat(); or add if():
      if (Array.isArray(result.city)) {
        result[city].push(name);
      }
      let oldValue = result[city];
      result[city] = [oldValue, name];
    } else result[city] = name;
  }
};
console.log(groupByCity3(people));

const groupByCity2 = (array) => {
  const result = {};

  for (const item of array) {
    const { city, name } = item;

    if (!result[city]) {
      result[city] = name;
    } else if (Array.isArray(result[city])) {
      result[city].push(name);
    } else {
      result[city] = [result[city], name];
    }
  }

  return result;
};

console.log(groupByCity2(people));
// {
//   city: name;
// }

// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/
