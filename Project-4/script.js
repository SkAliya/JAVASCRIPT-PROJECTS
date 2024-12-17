const bill = document.querySelector(".bill__top--amount");
const btnsParent = document.querySelector(".bill__middle--tips");
const btns = document.querySelectorAll(".bill__middle--tips-tip");
const count = document.querySelector(".bill__bottom--count");
const subBtn = document.querySelector(".bill__bottom--calc");
const tipPerPerson = document.querySelector(".tip");
const totalPerPerson = document.querySelector(".total");
const totalAmount = document.querySelector(".tot");

let billNo = 0;
let pepNo = 0;
let percent = 0;

function doMath(e) {
  e.preventDefault();
  // resetting after tip calculated
  if (e.target.textContent === "Reset") {
    e.target.textContent = "Calculate Tip";
    e.target.classList.remove("reset");
    billNo = 0;
    pepNo = 0;
    percent = 0;
    tipPerPerson.textContent = "$0";
    totalPerPerson.textContent = "$0";
    totalAmount.textContent = "$0";
    document
      .querySelectorAll(".bill__middle--tips-tip")
      .forEach((btn) => btn.classList.remove("btnSelected"));
    bill.value = 0;
    count.value = 0;
  } else {
    // calculating tips & totals
    billNo = +bill.value;
    pepNo = +count.value;
    // convert tip % to decimal
    let tipPer = percent / 100;

    // tip on total bill
    let tip = billNo * tipPer;
    // splitting tip for each
    let tipPerson = Number((tip / pepNo).toFixed(1));
    // divide the bill
    let billPerPerson = Number((billNo / pepNo).toFixed(1));
    // Updating UI
    tipPerPerson.textContent = `$${tipPerson}`;
    totalPerPerson.textContent = `$${billPerPerson + tipPerson}`;
    totalAmount.textContent = `$${billNo + tip}`;
    //resetting calculating tip btn
    e.target.classList.add("reset");
    e.target.textContent = "Reset";
  }
}
// getting tip % from user or seleted 1s from defult
function getPercent(e) {
  if (e.target.classList.contains("custom")) {
    let newPer = prompt(
      "Enter Your Percentage % ,If u not enter any %, 1% is defualt"
    );

    if (!newPer) newPer = 1;

    document
      .querySelectorAll(".bill__middle--tips-tip")
      .forEach((btn) => btn.classList.remove("btnSelected"));

    let html = `<button class="bill__middle--tips-tip btnSelected" data-percent=${newPer}>${newPer}%</button>`;
    e.target.insertAdjacentHTML("beforeBegin", html);
    percent = +newPer;
  } else {
    // percent = +e.target.textContent.split("").slice(0, -1).join("");
    percent = +e.target.dataset.percent;
    btns.forEach((btn) => btn.classList.remove("btnSelected"));
    e.target.classList.add("btnSelected");
  }
}

btnsParent.addEventListener("click", getPercent);
subBtn.addEventListener("click", doMath);
