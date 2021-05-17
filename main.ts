// declare array with type in TS
enum ROLES {
  ADMIN = 4,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: ROLES;
} = {
  name: "joko",
  age: 30,
  hobbies: ["football", "touring"],
  role: ROLES.AUTHOR,
};

console.log(person.role);
