// State variables
let count = 0;
let step = 1;

// DOM elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const stepButtons = document.querySelectorAll(".step-btn");

// Update UI
function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Increment
incrementBtn.addEventListener("click", () => {
  count += step;
  updateDisplay();
});

// Decrement (cannot go below 0)
decrementBtn.addEventListener("click", () => {
  if (count - step <= 0) {
    count -= step;
  } else {
    count = 0;
  }
  updateDisplay();
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Step selection
stepButtons.forEach(button => {
  button.addEventListener("click", () => {
    step = Number(button.dataset.step);

    // Highlight active step
    stepButtons.forEach(btn => btn.classList.remove("active-step"));
    button.classList.add("active-step");
  });
});
