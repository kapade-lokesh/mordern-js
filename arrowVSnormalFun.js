// There are some diffrence between the arrow functions and normal functions
/*
   1. the scope of this 
   2. availability of the "argument object" 
   3. calling like the constructor 

*/

//1. the scope of this is avalible in the normal function but not in the arrow

/* 
Normal functions differ significantly from arrow functions, 
especially when it comes to their behavior with the this keyword and their scope. 
Here are some key characteristics of normal functions:

Dynamic this Context: Normal functions have their own this context. 
The value of this changes depending on how the function is invoked:

When used as a method: this refers to the object that owns the method.

When used as a regular function: In non-strict mode, this refers to the global object 
(window in browsers). 
In strict mode, this is undefined.

*/

function person(name) {
  this.name = name;
  console.log(this.name);
}

person("lokesh");

/* but if you try this with the arrow function is not getting works
 Arrow functions do not define their own this. Instead, they rely on the lexical
  context, which means their this is inherited from the enclosing scope. 
  If you need this to refer to the context of the function invocation, 
 use a regular function instead of an arrow function.
*/
(() => {
  let arrowPerson = (name) => {
    this.name = name;
    console.log(this.name);
  };
  arrowPerson();
})();

// we can better understand this with below example

const obj = {
  name: "lokesh",
  age: 24,
  getdetils: function () {
    console.log(this.name, this.age); // have its own this
  },
};

obj.getdetils();

const obj1 = {
  name: "lokesh",
  age: 24,
  getdetils: () => {
    console.log(this.name, this.age); // not have its own this
  },
};

obj1.getdetils(); //  undefined undefined

// 2. availability of the "argument object"

/* Normal functions have access to the arguments object, 
which contains all the arguments passed to the function. Example
*/

function variadicFunction() {
  console.log(arguments); // this is an argumnet object of all parameters pass when function get call
}

variadicFunction(10, 20, 30, 40);

//we can call a normal function like a constructor function

function Admin(name) {
  this.name = name;
  console.log(this.name);
}

var lokesh = new Admin("lokesh");

console.log(lokesh.name); //lokesh

//