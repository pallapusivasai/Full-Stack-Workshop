// Ask user to choose conversion type
let choice = prompt(
  "Choose conversion type:\n" +
  "1. Celsius to Fahrenheit\n" +
  "2. Fahrenheit to Celsius"
);

// Ask for the temperature value
let temp = prompt("Enter the temperature value:");
temp = Number(temp);

// Perform conversion and display result
if (choice === "1") {
  let fahrenheit = (temp * 9 / 5) + 32;
  alert(`${temp}°C is equal to ${fahrenheit.toFixed(2)}°F`);
  console.log(`${temp}°C → ${fahrenheit}°F`);

} else if (choice === "2") {
  let celsius = (temp - 32) * 5 / 9;
  alert(`${temp}°F is equal to ${celsius.toFixed(2)}°C`);
  console.log(`${temp}°F → ${celsius}°C`);

} else {
  alert("Invalid choice! Please refresh and choose 1 or 2.");
}
