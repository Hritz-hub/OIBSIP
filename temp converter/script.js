function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  const resultElement = document.getElementById("result");

  if (isNaN(temp)) {
    resultElement.innerText = "Please enter a valid number.";
    return;
  }

  let result;

  if (unit === "c2f") {
    result = (temp * 9 / 5) + 32;
    resultElement.innerText = `${temp}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (temp - 32) * 5 / 9;
    resultElement.innerText = `${temp}°F = ${result.toFixed(2)}°C`;
  }
}
