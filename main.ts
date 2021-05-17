// union types && aliases(costume types)

type NumString = number | string;

function add(
  input1: NumString,
  input2: NumString,
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
const combinedStringAge = add("40", "50", "as-text");
const mixingName = add("yo", "decan", "as-text");

console.log(combinedAge);
console.log(combinedStringAge);
console.log(mixingName);
