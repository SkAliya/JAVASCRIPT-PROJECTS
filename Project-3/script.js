const day = document.querySelector(".date__day");
const month = document.querySelector(".date__month");
const hours = document.querySelector(".clock__time--inner-hours");
const mins = document.querySelector(".clock__time--inner-minutes");
const merid = document.querySelector(".clock__time--merid");
const progress = document.querySelector(".clock__progress");

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
  hour12: true,
  month: "long",
  day: "2-digit",
});

let formatedDate = formating.format(now);
let dayName = dayarray[now.getDay() - 1];
let [mon, date, , time, meridian] = formatedDate.split(" ");
let [h, m] = time.split(":");

day.textContent = dayName + " " + date;
month.textContent = mon;
hours.textContent = h;
mins.textContent = m;
merid.textContent = meridian;

let degree = 0;
progress.style.background = `conic-gradient(
      var(--primary-color-1) ${30 * h}deg,
      rgba(0, 0, 0, 0.073) 0deg
    )`;
