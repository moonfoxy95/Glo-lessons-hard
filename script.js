'use strict';

// Задание 1
let lang = 'ru';

let weekdaysRu = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let weekdaysEn = 'monday, tuesday, wensday, thursday, friday, saturday, sunday';
let weekdaysErr = 'Язык не ru или en'

if (lang === 'ru') {
  console.log(weekdaysRu);
} else if (lang === 'en') {
  console.log(weekdaysEn);
} else {
  console.log(weekdaysErr);
}

switch (lang) {
  case 'ru':
    console.log(weekdaysRu);
    break;
  case 'en':
    console.log(weekdaysEn);
    break;
  default:
    console.log(weekdaysErr);
}

let weeksArray = {
  'ru': [weekdaysRu],
  'en': [weekdaysEn]
}

if (weeksArray[lang]) {
  console.log(weeksArray[lang].join(', '));
} else {
  console.log(weekdaysErr);
}

// Задание 2
let namePerson = 'Артем';

namePerson === 'Артем'
  ? console.log('директор')
  : namePerson === 'Александр'
    ? console.log('преподаватель')
    : console.log('студент')