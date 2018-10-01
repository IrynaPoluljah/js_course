'use strict'

let messageMain = 'Выберите одну из предложеных формул: \n 1:  y = kx + b \n 2:  y = x^2';
let formulaFirst = 'y = kx + b';
let formulaSecond = 'y = x^2';
let chooseNumbers = 'Задайте значение для';
let firstFormulaK ;
let firstFormulaNumberK ;
let firstFormulaX ;
let firstFormulaNumberX ;
let firstFormulaB ;
let firstFormulaNumberB ;
let firstFormulaResult ;
let secondFormulaX ;
let secondFormulaNumberB ;
let secondFormulaResult ;
let result ;
let messageExit = 'exit';
let resultMain = {
  history:[],
  formula: '',
  args: {},
};

function calculate () {

  function chooseMain () {
    do {
      result = prompt(messageMain);
      resultMain.history.push(result);
    } while (result != 1 && result != 2 && result != false && result != 'exit');

    if(result === messageExit) {
      return resultMain;
    } else {
  
      if(result == 1) {
  
        resultMain.args = {};
        resultMain.formula = formulaFirst;

        do {
          firstFormulaK = prompt(`${chooseNumbers} k`);
          firstFormulaNumberK = +firstFormulaK;
          resultMain.args.k = firstFormulaNumberK;
        } while (!firstFormulaNumberK && firstFormulaNumberK !== 0 && !messageExit);

        if(firstFormulaK == messageExit) {
          resultMain.args.k = firstFormulaK;
          return resultMain;
        }

        do {
          firstFormulaX = prompt(`${chooseNumbers} x`);
          firstFormulaNumberX = +firstFormulaX;
          resultMain.args.x = firstFormulaNumberX;
        } while (!firstFormulaNumberX && firstFormulaNumberX !== 0 && !messageExit);

        if(firstFormulaX == messageExit) {
          resultMain.args.x = firstFormulaX;
          return resultMain;
        }

        do {
          firstFormulaB = prompt(`${chooseNumbers} b`);
          firstFormulaNumberB = +firstFormulaB;
          resultMain.args.b = firstFormulaNumberB;
        } while (!firstFormulaNumberB && firstFormulaNumberB !== 0 && !messageExit);

        if(firstFormulaB == messageExit) {
          resultMain.args.b = firstFormulaB;
          return resultMain;
        }

        firstFormulaResult = (firstFormulaNumberK * firstFormulaNumberX) + firstFormulaNumberB;
        alert(firstFormulaResult);
          
        chooseMain ();
  
      } else if (result == 2) {
  
        resultMain.args = {};
        resultMain.formula = formulaSecond;

        do {
          secondFormulaX = +prompt(`${chooseNumbers} x`);
          secondFormulaNumberB = +secondFormulaX;
          resultMain.args.x = secondFormulaNumberB;
        } while (!secondFormulaNumberB && secondFormulaNumberB !== 0);

        if(secondFormulaX == messageExit) {
        resultMain.args.x = secondFormulaX;
          return resultMain;
        }

        secondFormulaResult = secondFormulaNumberB * secondFormulaNumberB;
        alert(secondFormulaResult);
  
        chooseMain ();
  
      } else {
  
        chooseMain ();
      }
    }
  }

  chooseMain ();

  console.log(resultMain);
  return resultMain;
}
