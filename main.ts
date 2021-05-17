// declare array with type in TS
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "joko",
  age: 30,
  hobbies: ["football", "touring"],
};

console.log(person.hobbies);
