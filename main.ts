// union types
function add(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-text" | "as-number"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAge = add(20, 30, "as-number");
console.log(combinedAge);

const combinedStringAge = add("40", "50", "as-text");

const mixingName = add("yo", "decan", "as-text");
console.log(mixingName);
