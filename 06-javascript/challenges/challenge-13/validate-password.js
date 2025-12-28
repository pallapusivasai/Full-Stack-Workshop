// File: validate-password.js

function validatePassword(password) {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  // Length check
  if (password.length < 8) {
    errors.push("Too short");
    suggestions.push("Use at least 8 characters");
  } else {
    score += 20;
  }

  // Uppercase
  if (!/[A-Z]/.test(password)) {
    errors.push("No uppercase letter");
    suggestions.push("Add an uppercase letter");
  } else {
    score += 20;
  }

  // Lowercase
  if (!/[a-z]/.test(password)) {
    errors.push("No lowercase letter");
    suggestions.push("Add a lowercase letter");
  } else {
    score += 20;
  }

  // Number
  if (!/[0-9]/.test(password)) {
    errors.push("No number");
    suggestions.push("Add a number");
  } else {
    score += 20;
  }

  // Special character
  if (!/[!@#$%^&*()_+\-=]/.test(password)) {
    errors.push("No special character");
    suggestions.push("Add a special character");
  } else {
    score += 20;
  }

  // Common password check
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score = Math.min(score, 20);
  }

  return {
    isValid: errors.length === 0,
    score,
    errors,
    suggestions
  };
}

/* ================= TEST ================= */



console.log(validatePassword("MyP@ssw0rd!2024"));
