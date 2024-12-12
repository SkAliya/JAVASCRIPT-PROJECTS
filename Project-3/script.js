const day = document.querySelector(".date__day");
const month = document.querySelector(".date__month");
const hours = document.querySelector(".clock__time--inner-hours");
const mins = document.querySelector(".clock__time--inner-minutes");
const merid = document.querySelector(".clock__time--merid");
const outer = document.querySelector(".clock__outer");
const inner = document.querySelector(".clock__inner");
const inner2 = document.querySelector(".clock__time");

let dayarray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let now = new Date();
let formating = new Intl.DateTimeFormat(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  month: "long",
  day: "2-digit",
});

let formatedDate = formating.format(now);
let dayName = dayarray[now.getDay() - 1];
let [mon, date, , time, meridian] = formatedDate.split(" ");
let [h, m, s] = time.split(":");

day.textContent = dayName + " " + date;
month.textContent = mon;
merid.textContent = meridian;

// EVERY 1SEC UPDATES UI OF CLOCK
setInterval(() => {
  let now2 = new Date();
  outer.style.background = `conic-gradient(
    var(--primary-color-1) ${15 * now2.getHours()}deg,
    rgba(0, 0, 0, 0.073) 0deg
  )`;
  inner.style.background = `conic-gradient(rgba(0, 0, 0, 0.708) ${
    6 * now2.getMinutes()
  }deg, #fff7ed 0deg)`;
  inner2.style.background = `conic-gradient(var(--primary-color-1) ${
    6 * now2.getSeconds()
  }deg, #fff7ed 0deg)`;
  console.log(now2.getMinutes());
  hours.textContent = now2.getHours();
  mins.textContent = now2.getMinutes();
}, 1000);

// ANOTHER WAY OF LOADING TIME BY RELOADING PAGE EVERY 1SEC / IN HTML BY ADDING META TAG <!-- <meta http-equiv="refresh" content="1" /> -->
// setInterval(() => {
//   window.location.reload();
// }, 1000);
// outer.style.background = `conic-gradient(
//       var(--primary-color-1) ${30 * h}deg,
//       rgba(0, 0, 0, 0.073) 0deg
//     )`;
// inner.style.background = `conic-gradient(rgba(0, 0, 0, 0.708) ${
//   6 * m
// }deg, #fff7ed 0deg)`;

// inner2.style.background = `conic-gradient(var(--primary-color-1) ${
//   6 * s
// }deg, #fff7ed 0deg)`;
