// types Never

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "willian";
if (userInput === "string") {
  userName = userInput;
}

function generatorError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

console.log(generatorError("bad request", 400));
