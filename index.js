const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons").children;

for (let button of buttons) {
  button.addEventListener("click", () => {
    display.innerText += button.innerText;
  });
}
