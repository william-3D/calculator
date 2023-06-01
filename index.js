const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons").children;
const allSymbols = ["+", "-", "X", "/", "%", "AC", "="];

//declared as strings so we can concatenate
let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

const calculate = () => {
  //convert back to number
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);

  if (symbol === "+") result = firstValue + secondValue;
  if (symbol === "-") result = firstValue - secondValue;
  if (symbol === "X") result = firstValue * secondValue;
  if (symbol === "/") result = firstValue / secondValue;
  if (symbol === "%") result = firstValue % secondValue;

  if (symbol === "/" && secondValue === 0) result = NaN;

  display.innerText = result;
  firstValue = result;
  secondValue = "";

  display.innerHTML = Math.round(result * 1000) / 1000;
};

for (let button of buttons) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (!secondValue && btnValue === "=") return null;
    if (btnValue === "⌫") return null;

    if (btnValue === "AC") {
      firstValue = secondValue = symbol = "";
      return (display.innerText = "");
    }

    if (firstValue && btnValueIsSymbol) {
      secondValue && calculate();
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
  });
}

const deleteButton = () => {
  let currentValue = display.innerText;
  currentValue = currentValue.slice(0, -1);
  display.innerText = currentValue;
};
const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", deleteButton);
