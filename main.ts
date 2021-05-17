// declare array with type in TS
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number];
} = {
  name: "joko",
  age: 30,
  hobbies: ["football", "touring"],
  role: ["senior", 10],
};

person.role[0] = "manager";

console.log(person.role);
