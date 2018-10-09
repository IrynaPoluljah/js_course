'use strict';

// 1

function itsMe (a = 'IrynaPoluljah') {
  const str = `It’s me, ${a}`;
  console.log(str);
  return str;
}

//  2


function compare (a, b) {
  let res;
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    res = 'НЕ ЧИСЛО';
  } else if (a < b) {
    res = `${a} < ${b}`;
  } else if (a == b) {
    res = `${a} == ${b}`;
  } else if (a > b) {
    res = `${a} > ${b}`;
  }
  return res;
}

//  3

function row (a, b, c, str) {
  let myArr = [];
  let newArr = '';
  if (str === '<') {
    myArr.push(a, b, c);
    myArr.sort ((a, b ) => a - b);
    newArr = myArr.join(' < ');
  } else if(str === '>') {
    myArr.push(a, b, c);
    myArr.sort ((a, b ) => b - a);
    newArr = myArr.join(' > ');
  }
  return newArr;
}

//  4

function fact (number) {
  for ( let i = number ; i-- ; ) {
    number *= i;
  
   if ( i === 1 ) {
     break;
   }
  }
  return number;
}


//  5

function matrixDiff (a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {

    for(let k = 0; k < b.length; k += 1) {

      if(a[i].length !== b[i].length) {
        return NaN;
      }
      result += Math.abs(a[i][k] - b[i][k]); 
    }
  }
  
  return result;
}

// 6

function strangeSearch (array) {

  const parentElem = document.body;
  const btn = document.createElement('button');
  btn.innerText = 'Search';
  btn.id = 'go';
  parentElem.append(btn);

  for(let i = 0; i < array.length; i += 1) {
    //let field = [];
    //let phrase = [];
    let div = document.createElement('div');
    let input = document.createElement('input');
    div.innerText = array[i];
    input.setAttribute('type', 'number');
    input.value = 0;
    div.append(input);
    parentElem.append(div);
    //fields.push(input);

    // btn.addEventListener('click', () => {
    //   fields.sort((a, b) => b.value - a.value);
    //   for (let element of fields) {
        
    // }
    //   window.location.href = `https://www.youtube.com/results?search_query=${address.join('+')}`;
    // })

  }

  

}

strangeSearch(['jhsdgfj', 'jshgfjd', 'sjdhvf', 'skhdgfk']);