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
    billNo = bill.value;
    pepNo = count.value;
    let tipPer = (billNo / pepNo) * (percent / 100);
    let totPer = (billNo / pepNo + tipPer).toFixed(2);

    console.log(tipPer, totPer);
    tipPerPerson.textContent = `$${tipPer}`;
    totalPerPerson.textContent = `$${totPer}`;
    totalAmount.textContent = `$${+billNo + tipPer * pepNo}`;
    e.target.classList.add("reset");
    e.target.textContent = "Reset";
  }
}
function getPercent(e) {
  if (e.target.classList.contains("custom")) {
    let newPer = prompt("Enter Your Percentage %");
    if (!newPer) return;
    document
      .querySelectorAll(".bill__middle--tips-tip")
      .forEach((btn) => btn.classList.remove("btnSelected"));
    let html = `<button class="bill__middle--tips-tip btnSelected">${newPer}%</button>`;
    e.target.insertAdjacentHTML("beforeBegin", html);
    console.log(+newPer);
    percent = +newPer;
  } else {
    percent = e.target.textContent.split("")[0];
    btns.forEach((btn) => btn.classList.remove("btnSelected"));
    e.target.classList.add("btnSelected");
  }
}

btnsParent.addEventListener("click", getPercent);
subBtn.addEventListener("click", doMath);
