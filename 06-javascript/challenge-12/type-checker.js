const typeOf = value => {
  // Handle null
  if (value === null) return "null";

  // Handle NaN
  if (typeof value === "number" && Number.isNaN(value)) {
    return "nan";
  }

  const baseType = typeof value;

  // Primitive and function types (array method ✔)
  const primitiveTypes = [
    "undefined",
    "string",
    "number",
    "boolean",
    "symbol",
    "function"
  ];

  if (primitiveTypes.includes(baseType)) {
    return `${baseType}`; // template literal ✔
  }

  // Objects (array, date, map, set, regexp, error, promise, etc.)
  return `${Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase()}`; // template literal ✔
};

/* ================= TEST ================= */

[
  null,
  undefined,
  42,
  NaN,
  "hello",
  true,
  Symbol(),
  [],
  {},
  () => {},
  new Date(),
  new Map(),
  new Set(),
  /regex/,
  new Error(),
  Promise.resolve()
].forEach(value => {
  console.log(typeOf(value));
});
