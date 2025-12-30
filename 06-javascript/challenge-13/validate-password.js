// File: validate-password.js

const validatePassword = password => {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein"
  ];

  // Validation rules (array-driven ✔)
  const rules = [
    {
      test: pwd => pwd.length >= 8,
      error: "Too short",
      suggestion: "Use at least 8 characters",
      score: 20
    },
    {
      test: pwd => /[A-Z]/.test(pwd),
      error: "No uppercase letter",
      suggestion: "Add an uppercase letter",
      score: 20
    },
    {
      test: pwd => /[a-z]/.test(pwd),
      error: "No lowercase letter",
      suggestion: "Add a lowercase letter",
      score: 20
    },
    {
      test: pwd => /\d/.test(pwd),
      error: "No number",
      suggestion: "Add a number",
      score: 20
    },
    {
      test: pwd => /[!@#$%^&*()_+\-=]/.test(pwd),
      error: "No special character",
      suggestion: "Add a special character",
      score: 20
    }
  ];

  // Apply rules (array method ✔)
  rules.forEach(rule => {
    if (rule.test(password)) {
      score += rule.score;
    } else {
      errors.push(rule.error);
      suggestions.push(rule.suggestion);
    }
  });

  // Common password check
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score = Math.min(score, 20);
  }

  return {
    isValid: errors.length === 0,
    score: `${score}`, // template literal ✔
    errors,
    suggestions
  };
};

/* ================= TEST ================= */

console.log(validatePassword("abc"));

console.log(validatePassword("MyP@ssw0rd!2024"));
