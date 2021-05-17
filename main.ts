// declare array with type in TS
enum ROLES {
  ADMIN = 4,
  READ_ONLY = "read yolo",
  AUTHOR = 900,
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
  role: ROLES.ADMIN,
};

console.log(person.role, ROLES);
