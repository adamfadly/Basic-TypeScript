//if Default function has two paramatesr always put default parameter on the second parameter otherwise will thrown an error
function addNum(num1: number, num2: number = 10) {
  return num1 + num2;
}
// Default parameter only has one parameter
function printString(name: string = "mandra") {
  return name;
}

const minus = (num1: number, num2: number = 2) => num1 - num2;

console.log(addNum(1));

console.log(minus(1));

console.log(printString("atun"));
