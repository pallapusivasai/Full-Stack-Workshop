let input = "    ";

if (input !== "") {
  console.log("Valid");   // ❌ This runs (wrong)
}

if (input.trim() !== "") {
  console.log("Valid");   // ✅ This does NOT run
}
