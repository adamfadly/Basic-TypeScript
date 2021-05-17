const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("valueOne")! as HTMLInputElement;
const input2 = document.getElementById("valueTwo")! as HTMLInputElement;

function addNum(input1: number, input2: number) {
  return input1 + input2;
}

button.addEventListener("click", function () {
  console.log(addNum(+input1.value, +input2.value));
});
