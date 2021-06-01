const hobbies = ["Football", "Bike", "swim"];
const newHobbies: string[] = ["Brew Coffee", "Baking"];

hobbies.push(...newHobbies);

console.log(hobbies);

const person: object = {
  name: "Susi",
  age: 32,
};

const address = {
  address1: "jl tikus",
  address2: "jl suka maju",
  projects: ["loco", "okok", "aaa"],
};

const detail = {
  role: "manager",
  other: person,
  ...address,
};

const fullDetail = {
  id: 1111,
  ...detail,
};

console.log(fullDetail);
console.log(detail);
