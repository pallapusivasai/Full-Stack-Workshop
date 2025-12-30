const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");

const fields = [
  { id: "username", error: "usernameError" },
  { id: "email", error: "emailError" },
  { id: "password", error: "passwordError" },
  { id: "confirmPassword", error: "confirmPasswordError" }
];

// Convert to usable objects (array method ✔)
const inputs = fields.map(field => ({
  input: document.getElementById(field.id),
  error: document.getElementById(field.error)
}));

const validators = {
  username: false,
  email: false,
  password: false,
  confirmPassword: false
};

// UI helpers
const setValid = (input, errorEl) => {
  input.classList.add("valid");
  input.classList.remove("invalid");
  input.nextElementSibling.style.display = "inline";
  errorEl.textContent = "";
};

const setInvalid = (input, errorEl, message) => {
  input.classList.add("invalid");
  input.classList.remove("valid");
  input.nextElementSibling.style.display = "none";
  errorEl.textContent = `${message}`; // template literal ✔
};

const checkFormValidity = () => {
  submitBtn.disabled = !Object.values(validators).every(Boolean); // array method ✔
};

// Username
username.addEventListener("blur", () => {
  const value = username.value.trim();
  const regex = /^[a-zA-Z0-9]{3,15}$/;

  regex.test(value)
    ? (setValid(username, usernameError), validators.username = true)
    : (setInvalid(username, usernameError, "3–15 chars, alphanumeric only"),
       validators.username = false);

  checkFormValidity();
});

// Email
email.addEventListener("blur", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  regex.test(email.value.trim())
    ? (setValid(email, emailError), validators.email = true)
    : (setInvalid(email, emailError, "Enter a valid email"),
       validators.email = false);

  checkFormValidity();
});

// Password
password.addEventListener("blur", () => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  regex.test(password.value)
    ? (setValid(password, passwordError), validators.password = true)
    : (setInvalid(
        password,
        passwordError,
        "8+ chars, 1 uppercase, 1 number, 1 special char"
      ),
      validators.password = false);

  checkFormValidity();
});

// Confirm Password
confirmPassword.addEventListener("blur", () => {
  confirmPassword.value === password.value && confirmPassword.value !== ""
    ? (setValid(confirmPassword, confirmPasswordError),
       validators.confirmPassword = true)
    : (setInvalid(confirmPassword, confirmPasswordError, "Passwords do not match"),
       validators.confirmPassword = false);

  checkFormValidity();
});

// Prevent invalid submit
form.addEventListener("submit", e => {
  e.preventDefault();
  alert(`Form submitted successfully ✔`);
});
