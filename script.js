'use strict';

// Усложненное 1 (строка 15)

let screenPrice;

let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

do {
  screenPrice = '   500   ' || prompt('Сколько будет стоить данная работа?')
} while (!isNumber(screenPrice));

screenPrice = +screenPrice;

console.log(screenPrice, typeof (screenPrice));

// Усложненное 2

let myArr = ['102', '20', '30', '40', '50', '60', '70'];

for (let i = 0; i < myArr.length; i++) {
  if (myArr[i][0] === '2' || myArr[i][0] === '4') {
    console.log(myArr[i]);
  }
}


let simpleDigit = function () {
  for (let i = 2; i <= 100; i++) {

    let isSimple = true;

    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSimple = false;
        break;
      }
    }

    if (isSimple) {
      console.log(i);
    }
  }
}

simpleDigit();