'use strict';

function lesson4(oneArgument) {
  if (typeof oneArgument !== 'string') {
    return 'Аргумент не строка.';
  } else {
    let modifiedOneArgument = oneArgument.trim();
    if (modifiedOneArgument.length > 30) {
      modifiedOneArgument = modifiedOneArgument.substring(0, 30) + '...';
    }
    return modifiedOneArgument;
  }
}

let myArgument = 'Oberfeldwaldwiesenundhaushofmeister';

console.log(lesson4(myArgument));