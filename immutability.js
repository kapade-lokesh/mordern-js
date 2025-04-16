// Immutability means that the data cannot be changed or modified after it is created.

// ✅ Example of immutability in JavaScript using a string (primitive type)
let name = "lokesh";

// Suppose I want to change the first character of the string
// name[0] = "K"; ❌ This won't work — strings are immutable in JS

const changeName = (name) => {
  name = "prasad"; // This only reassigns the local parameter
  console.log(`Inside function: ${name}`); // prasad
};

changeName(name);
console.log(`Outside function: ${name}`); // lokesh

// Even though we tried to change it inside the function, the original 'name' is unchanged
// This is because strings (and other primitive types) are immutable in JavaScript

// JS uses references for non-primitive types, but primitives are passed by value

// ✅ Now let's look at a non-primitive type: object

let person = {
  name: "lokesh",
  age: 25,
};

const changeObj = (obj) => {
  obj.name = "prasad"; // We are modifying the original object
  console.log(`Inside function: ${obj.name}`); // prasad
};

changeObj(person);
console.log(`Outside function: ${person.name}`); // prasad

// Here the object is mutable, so changes inside the function affect the original object
