// function return types and void

function addNum(num1: number, num2: number): number {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log("result: " + num);
  // return "result: " + num;
}

function proceed(yolo: number): string {
  const result = yolo.toString();
  return result;
}

// this function has params 2 number type and a single function
// showing typescript function types in the parameters and t
function convertNumToString(
  num1: number,
  num2: number,
  translator: Function
): number {
  const result = "";

  let temp = num1 + num2;

  return translator(temp);
}

let olo = convertNumToString(2, 3, proceed);
console.log(typeof convertNumToString(2, 3, proceed));
console.log(typeof olo);
console.log(olo);
