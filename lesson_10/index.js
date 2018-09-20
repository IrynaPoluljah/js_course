'use strict'

let myAge = 22;
let years ;
let str = 'Мой возраст';
let lastNumberAge = myAge % 10;
let isExclusion = (myAge % 100 >= 11) && (myAge % 100 <= 14);

if (lastNumberAge === 1) {
  years = 'год'
} 
else if (lastNumberAge === 0 || lastNumberAge >= 5 && lastNumberAge <= 9) {
  years = 'лет'
} 
else if (lastNumberAge >= 2 || lastNumberAge >= 4 ) {
  years = 'года'
} 
if (isExclusion) {
  years = 'лет'
};


console.log(`${str} ${myAge} ${years}`); 

// 1 год 
// 2 года
// 3 года
// 4 года
// 5 лет
// 6 лет
// 7 лет
// 8 лет
// 9 лет
// 10 лет
// 11-14 лет


let arr = [-7, 0, -9, 8, null, undefined, 'qwe', -60, 83];
let newArr = [];
let numberArr = [];
let taskArr = {
  negative: 0,
}
let sum = 0;
let n = 0;

for (let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'number') {
    numberArr[numberArr.length] = arr[i];
    sum += arr[i];
    n++;
  } else {
      newArr[newArr.length] = arr[i] ;
    }
}

taskArr.max = Math.max.apply(Math, numberArr);
taskArr.min = Math.min.apply(Math, numberArr);
taskArr.avg = sum / n;
taskArr['not a number'] = newArr.length;

for (let i = 0; i < arr.length; i++) {
  if(arr[i] < 0) {
    taskArr.negative ++ ;
  } 
}

console.log(taskArr);
