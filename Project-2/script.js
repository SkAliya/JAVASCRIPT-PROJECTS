const inp = document.querySelector(".container__inp");
const total = document.querySelector(".container__total");
const btns = document.querySelector(".container__grid");

inp.focus();
let num = "";

// TAKING INPUT VALUE
function doMath(e) {
  if (e.target.dataset.type === "number") {
    //DISPLAYING SUM OF INPUT WHEN SELECT =
    if (num.endsWith("=")) {
      inp.value = "";
      total.textContent = "";
      num = "";
    }
    inp.value = "";
    //DISPLAYING NEW DIGIT IN INPUTBAR
    inp.value = e.target.dataset.value;
    num += inp.value;
    inp.value = num.replace("*", "x");
    //CHANGE THE FONT-SIZE WHEN INP LENGTH IS HIGHER
    if (inp.value.length > 10) {
      inp.classList.add("extraInput");
    }

    inp.focus();
  }
  //REDIRECT TO CALC FUN WHEN ANY SYMBOL SELECTS
  if (e.target.dataset.type === "symbol") {
    console.log("entered");
    calc(e.target);
  }
}

//CHECKS WHAT BTN SELECTS ND CALL A/C FUNC
function calc(target) {
  switch (target.dataset.value) {
    case "ac":
      clear(target);
      break;
    case "del":
      del(target);
      break;
    case "%":
      outPut(target);
      break;
    case "/":
      outPut(target);
      break;
    case "x":
      times(target);
      break;
    case "-":
      outPut(target);
      break;
    case "+":
      outPut(target);
      break;
    case "=":
      sum(target);
      break;
    default:
      "wrong select";
      break;
  }
}

//REPLACING SYMBOL IF MULTIPLE TYMS SAME SYMBOL SELECTED
function replaceExtra(target) {
  let regex = /[0-9]/g;
  let result = regex.test(num[num.length - 1])
    ? (num += target.dataset.value)
    : num.slice(0, -1) + num.at(-1).replace(num.at(-1), target.dataset.value);
  num = result;
  console.log(num);
}

//DISPLAYING OUTPUT IN INPUTBAR & OUTPUT TAB
function outPut(target) {
  num = String(num);
  inp.focus();
  replaceExtra(target);
  total.textContent = eval(num.slice(0, -1)) + num.at(-1);
  inp.value = total.textContent;
  num = total.textContent;
}

//DOING MULTIPLICATION & REPLACING X -> *
function times(target) {
  num = String(num);
  inp.focus();
  replaceExtra(target);
  total.textContent = eval(num.slice(0, -1)) + num.slice(-1);
  inp.value = total.textContent;
  num = total.textContent;
  num = num.replace("x", "*");
}

//DELETING INPUT SINGLE SINGLE
function del(target) {
  num = num.slice(0, num.length - 1);
  inp.value = num.replace("*", "x");
  total.textContent = num.replace("*", "x");
  inp.focus();
}

//CLEARING ALL INPUT & OUTPUT
function clear(target) {
  inp.value = "";
  inp.focus();
  num = "";
  total.textContent = 0;
}

//SHOWING FINAL EQUAL VALUE
function sum(target) {
  num = String(num);
  inp.focus();
  replaceExtra(target);
  total.textContent = num;
  inp.value = eval(num.slice(0, -1));
}

//HANDLING EVENT
btns.addEventListener("click", doMath);
