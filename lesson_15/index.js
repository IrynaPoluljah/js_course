'use strict';

(function() {

  function generateList(numOfNum, numbersParent) {
    const items = [];

    for(let i = 0; i < numOfNum; i += 1) {
      const item = document.createElement('span');
      item.innerText = i + 1;
    
      numbersParent.appendChild(item);
      items.push(item);
    
      if(i < numOfNum - 1) {
         const coma = document.createElement('span');
         coma.innerText = ', ';
         numbersParent.appendChild(coma);
      }
    }
    return items;
  }


const numOfNum = 5;
const numbersParent = document.getElementById('numbers');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const count = document.getElementById('count');
const items = generateList(numOfNum, numbersParent);
let id;
let seconds = 0;
let delay = 1000;
const oneX = document.getElementById('oneX');
oneX.innerText = '1X';
const twoX = document.getElementById('twoX');
twoX.innerText = '2X';
const threeX = document.getElementById('threeX');
threeX.innerText = '3X';


pauseBtn.disabled = true;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;

  id = setInterval (() => {
    const index = seconds % (numOfNum * 2);

    if(index < 5) {
      items[index].style.background = 'green';
    } else if (items[numOfNum * 2 - index -1]){
      items[numOfNum * 2 - index -1].style.background = 'black';
    }
    
    count.innerText = `${++seconds} seconds`;
  }, delay);
});

pauseBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  clearInterval(id);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  clearInterval(id);
  seconds = 0;
  count.innerText = '0 seconds';
});

oneX.addEventListener('click', () => {
  delay = 1000;
  oneX.disabled = true;
  twoX.disabled = false;
  threeX.disabled = false;

  if (startBtn.disabled) {
      startSpeed();
  }
});

twoX.addEventListener('click', () => {
  delay = 500;
  oneX.disabled = false;
  twoX.disabled = true;
  threeX.disabled = false;

  if (startBtn.disabled) {
      startSpeed();
  }
});

threeX.addEventListener('click', () => {
  delay = 1000 / 3;
  oneX.disabled = false;
  twoX.disabled = false;
  threeX.disabled = true;
  
  if (startBtn.disabled) {
      startSpeed();
  }
});

function startSpeed () {
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
  clearInterval(id);
  id = setInterval (() => {
    const index = seconds % (numOfNum * 2);

    if(index < 5) {
      items[index].style.background = 'green';
    } else if (items[numOfNum * 2 - index -1]){
      items[numOfNum * 2 - index -1].style.background = 'black';
    }
    
    count.innerText = `${++seconds} seconds`;
  }, delay);
}

}())
