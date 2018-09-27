'use strict'

// Написать функцию add, которая принимает один аргумент строку из символов эмодзи, 
// и должна вернуть среднее арифметические значение, суммы двух кодов эмодзи 
// (эмодзи-символы состоят из двух unicode кодов). Например add('🍔😁') 
// вернёт 112359. Если аргумент будет пустой, то его необходимо обработать 
// строку из эмодзи красного сердца и флага украины. '❤️🇺🇦'

function add(str) {
  let sum = 0;

  if(!str) {
    str = '❤️🇺🇦';
  } 

  for(let i = 0; i < str.length; i += 1) {

    for(let j = 0; j < str[i].length; j += 1) {
      sum += str[i][j].charCodeAt();
    }
  }
  
  let res = sum / (str.length / 2);
  return res;
}


// Написать функцию clearNumbers, которая принимает один аргумент - 
// массив массивов. Функция должна вернуть этот же массив массивов, 
// но очистив их от не числовых значений.

function clearNumbers(arr) {
  for (let y = 0; y < arr.length; y++) {
      let startLength = arr[y].length;

      while (startLength--) {
          for (let i = 0; i < arr[y].length; i++) {
              if (typeof arr[y][i] !== 'number') {
                  arr[y].splice(i, 1);
              }
          }
      }
  }
  return arr;
}

// Написать функцию revers, которая принимает бесконечное количество аргументов,
//  где каждый и них - строка. Функция должна вернуть массив строк в обратном 
//  порядке, где каждая строка - будет задом-наперед, Например: revers('123', '456')
//  вернет ['654', '321']

function revers() {
  let newArr = [];
  for(let i = 0; i < arguments.length; i += 1) {
    newArr[newArr.length] = arguments[i].split("").reverse().join("");
  } 
  return newArr.reverse();
}

// Написать функцию splitArray которая первым аргументом принимает 
// массив чисел, а вторым количество элементов в подмассивах. 
// Функция должна вернуть массив массивов. 
// Например:  splitArray([1, 4, 5, 6, 2], 2) вернет [[1, 4], [5, 6], [2]]. 
// Если количества элементов недостаточно - последний подмассив может содержать
//  меньшее количество элементов.

function splitArray (arr, num) {
  let secArr = [];
  let chunk = [];
  for( let i = 0; i < arr.length; i++ ) {

    chunk.push(arr[i]);

    if(chunk.length == num) {
      secArr.push(chunk);
      chunk = [];
    } else if(i === arr.length - 1) {
      secArr.push(chunk);
    }
  }
  return secArr;
}
