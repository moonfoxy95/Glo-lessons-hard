'use strict'

let weekDays = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье',
]

let createDiv = document.createElement('div');

let body = document.querySelector('body');
body.appendChild(createDiv);

let weekDaysDiv = document.querySelector('div');
weekDaysDiv.classList.add('weekdays');

let today = new Date();
//let today = new Date('March 29, 2026 14:15:30');
let todayDay = today.getDay();

weekDays.forEach(function (item, index) {
  let weekDaysP = document.createElement('p');
  weekDaysP.textContent = item;

  if (item === 'суббота' || item === 'воскресенье') {
    weekDaysP.style.fontStyle = 'italic';
  }

  if ((index + 1 === todayDay)
    || (index === 6 && todayDay === 0)) {
    weekDaysP.style.fontWeight = 'bold';
    weekDaysP.textContent += ' (сегодня)';
  }

  weekDaysDiv.appendChild(weekDaysP);
});