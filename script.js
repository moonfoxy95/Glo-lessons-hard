'use strict'

let body = document.querySelector('body');
let dateDiv = document.createElement('div');
let formatA = document.createElement('p');
let formatB = document.createElement('p');
body.appendChild(dateDiv);
dateDiv.appendChild(formatA);
dateDiv.appendChild(formatB);

//let today = new Date('March 29, 2026 14:15:30');
let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayWeekday = today.getDay();
let todayDate = today.getDate();
let todayHours = today.getHours();
let todayMinutes = today.getMinutes();
let todaySeconds = today.getSeconds();

let weekDaysArr = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
]

let monthsArr = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

let clockVariant = {
  0: ['часов', 'минут', 'секунд'],
  1: ['час', 'минута', 'секунда'],
  2: ['часа', 'минуты', 'секунды'],
  3: ['часа', 'минуты', 'секунды'],
  4: ['часа', 'минуты', 'секунды'],
  5: ['часов', 'минут', 'секунд'],
  6: ['часов', 'минут', 'секунд'],
  7: ['часов', 'минут', 'секунд'],
  8: ['часов', 'минут', 'секунд'],
  9: ['часов', 'минут', 'секунд'],
}

let clockWord = function (digit, index) {
  let lastDigit = digit.toString().slice(-1);
  if (digit >= 11 && digit <= 14) {
    return digit + ' ' + clockVariant[0][index]
  } else {
    return digit + ' ' + clockVariant[lastDigit][index];
  }
}

let makeTwoDigits = function (digit) {
  if (digit.toString().length === 1) {
    digit = '0' + digit;
  }

  return digit;
}

let updateDates = function () {
  today = new Date();
  todayYear = today.getFullYear();
  todayMonth = today.getMonth();
  todayWeekday = today.getDay();
  todayDate = today.getDate();
  todayHours = today.getHours();
  todayMinutes = today.getMinutes();
  todaySeconds = today.getSeconds();
}

// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды
let formatDateA = function () {
  let showDate = `
    Сегодня ${weekDaysArr[todayWeekday]}, 
    ${todayDate} ${monthsArr[todayMonth]} ${todayYear}, 
    ${clockWord(todayHours, 0)} ${clockWord(todayMinutes, 1)} ${clockWord(todaySeconds, 2)}
  `;

  formatA.textContent = showDate;
}

// 04.02.2020 - 21:05:33
let formatDateB = function () {
  let showDate = `
  ${makeTwoDigits(todayDate)}.${makeTwoDigits(todayMonth)}.${makeTwoDigits(todayYear)} 
  - ${makeTwoDigits(todayHours)}:${makeTwoDigits(todayMinutes)}:${makeTwoDigits(todaySeconds)}
  `;

  formatB.textContent = showDate;
}

setInterval(function () {
  formatDateA();
  formatDateB();
  updateDates();
}, 1000)