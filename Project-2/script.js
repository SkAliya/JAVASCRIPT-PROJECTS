const inp = document.querySelector(".container__inp");
const total = document.querySelector(".container__total");
const btns = document.querySelector(".container__grid");

inp.focus();
let num = 0;
function doMath(e) {
  if (e.target.dataset.type === "number") {
    inp.value += e.target.dataset.value;
    num += +e.target.dataset.value;
    // total.textContent = eval(inp.value);
    // total.textContent = ;
    // num += +e.target.dataset.value;
  }
  if (e.target.dataset.type === "symbol") {
    calc(e.target);
  }
}

function calc(target) {
  console.log(target.dataset.value);

  switch (target.dataset.value) {
    case "ac":
      clear(target);
      break;
    case "del":
      del(target);
      break;
    case "%":
      mod(target);
      break;
    case "∕":
      divide(target);
      break;
    case "x":
      times(target);
      break;
    case "-":
      sub(target);
      break;
    case "+":
      add(target);
      break;
    case "=":
      sum(target);
      break;
    default:
      "wrong select";
      break;
  }
}

btns.addEventListener("click", doMath);

function add(target) {
  inp.value += target.dataset.value;
  inp.focus();
  // console.log(num);
}

function sub(target) {
  console.log(target.dataset.value, inp.value);
  inp.value += target.dataset.value;
  inp.focus();
  // console.log(num);
}

function times(target) {
  console.log(target.dataset.value, inp.value);
  inp.value += target.dataset.value;
  inp.focus();
  // console.log(num);
}
