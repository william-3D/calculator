const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons").children;
const allSymbols = ["+", "-", "X", "/", "%", "AC", "="];

let firstValue = "";
let secondValue = "";
let symbol = "";

for (let button of buttons) {
  button.addEventListener("click", () => {
    const { innerText: btnValue } = button;
    display.innerText += btnValue;
    const btnValueIsSymbol = allSymbols.includes(btnValue);
  });
}
