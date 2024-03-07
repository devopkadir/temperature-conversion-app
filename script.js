const inputBox = document.getElementById("inputBox");
const celToFah = document.getElementById("celciusToFahrenheit");
const fahToCel = document.getElementById("fahrenheitToCelcius");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let temp;

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  if (celToFah.checked) {
    temp = Number(inputBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = `${temp.toFixed(1)}°F`;
  } else if (fahToCel.checked) {
    temp = Number(inputBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = `${temp.toFixed(1)}°C`;
  } else {
    result.textContent = "Please enter a number to convert.";
  }
});
