const hourArrow = document.querySelector('#hour');
const minuteArrow = document.querySelector('#minute');
const secondArrow = document.querySelector('#second');
const digHour = document.querySelector('.digital-hour');
const digMinute = document.querySelector('.digital-minute');
const digSecond = document.querySelector('.digital-second');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const year = document.querySelector('.year')
const month = document.querySelector('.month');
const buttons = document.querySelectorAll('.btn');
const nightElem = document.querySelectorAll('.night');

const deg = 6;
const days = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
];
const months = [
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
];
const srcs = [
  "./assets/image/bg1-img.jpg",
  "./assets/image/bg2-img.jpg",
  "./assets/image/bg3-img.jpg",
  "./assets/image/bg4-img.jpg",
]

setInterval(() => {
  let time = new Date();
  let n = time.getDay();
  let m = time.getMonth();
  let y = time.getFullYear();
  let d = time.getDate()
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  if (hour >= 6 && hour < 12) {
    document.body.style.backgroundImage = `url("./assets/image/bg1-img.jpg")`;
  } else if (hour >= 12 && hour < 18) {
    document.body.style.backgroundImage = `url("./assets/image/bg2-img.jpg")`;
  }
  else if (hour >= 18 && hour < 24) {
    document.body.style.backgroundImage = `url("./assets/image/bg3-img.jpg")`;
  } else {
    document.body.style.backgroundImage = `url("./assets/image/bg4-img.jpg")`;
  }

  let degHour = hour * 30;
  let degMinute = minute * deg;
  let degSecond = second * deg;
  hourArrow.style.transform = `rotate(${degHour + (degMinute / 12)}deg)`;
  minuteArrow.style.transform = `rotate(${degMinute}deg)`;
  secondArrow.style.transform = `rotate(${degSecond}deg)`;
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (second < 10) {
    second = `0${second}`;
  }
  digHour.textContent = hour;
  digMinute.textContent = minute;
  digSecond.textContent = second;
  day.textContent = `${days[n]},`;
  month.textContent = months[m];
  year.textContent = `${y} г.`;
  date.textContent = d;
});

const pressBtn = (item) => {
 
  if (!item.classList.contains('btn--active')) {
    buttons.forEach(elem => {
      if (elem.classList.contains('btn--active')) {
        elem.classList.remove('btn--active');
      } else {
        nightElem.forEach(item => {
          item.classList.toggle('nightMode');
        });
        document.querySelector('.box-shadow')
          .classList.toggle('box-shadow--active');
        elem.classList.add('btn--active');
      };
    });
  }
}

buttons.forEach(item => {
  item.addEventListener('click', () => {
    pressBtn(item);
  });
});



