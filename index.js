const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons").children;
const allSymbols = ["+", "-", "X", "/", "%", "AC", "="];

//declared as strings so we can concatenate
let firstValue = "";
let secondValue = "";
let symbol = "";

const calculate = () => {
  //convert back to number
  firstValue = parseFloat(firstValue);
  secondValue = parseFloat(secondValue);
};

for (let button of buttons) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;
    const btnValueIsSymbol = allSymbols.includes(btnValue);

    if (firstValue && btnValueIsSymbol) {
      symbol = btnValue;
    } else if (!symbol) firstValue += btnValue;
    else if (symbol) secondValue += btnValue;

    if (btnValue !== "=") display.innerText += btnValue;
  });
}
