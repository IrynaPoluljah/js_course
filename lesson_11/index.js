// Написать функцию “removeKeys1”, которая принимает два аргумента: 
// первый это объект второй это массив строк.
// Эта функция должна вернуть исходный объект у которого не будет ключей, 
// названия которых есть в массиве (втором аргумента). Например:
// removeKeys1({ a: 1, b: [], c: '' }, ['a', 'c']) Вернёт { b: [] }
function removeKeys1(obj, arr) {
  for( let i = 0; i < arr.length; i += +1) {
    delete obj[arr[i]]
}
  return obj;
};



// Написать функцию “removeKeys2”, которая вернет новый объект, 
// у которого будут те же ключи что и у первого аргумента, исключая те названия которыe есть
//  в массиве (втором аргументе)

// function removeKeys2(obj, arr) {
//   let newObj = {};

//   for (let key in obj) {
//       let  = false;

//       for (let i = 0; i < arr.length; i++) {
//           if (key === arr[i]) {
//               exlcude = true;
//               break;
//           }
//       }

//       if (!exlcude) {
//           newObj[key] = obj[key];
//       }
//   }
//   return newObj;
// }


function removeKeys2(obj, arr) {
  let newObj = {};

  for (let key in obj) {
      if (arr.indexOf(key) === -1) {
          newObj[key] = obj[key];
      }
  }
  return newObj;
}


// Написать функцию “absDiff”, которая принимает аргумент “a”, и возвращает функцию,
//  которая принимает только один аргумент аргумент “b”, 
// и возвращает абсолютную разницу чисел “a” и “b”
// absDiff(3)(7) Вернёт 4
function absDiff(a) {
  function get(b) {
    return Math.abs(a - b);
  }
  return get;
}
