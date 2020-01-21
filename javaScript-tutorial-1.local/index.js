/*
* JavaScript programmers tend to use camel case
* that starts with a lowercase letter
* i.e firstName, lastName, mastercard etc.
*/

// Comment: comments are ignored by browser.
console.log("Hello bGlobal!");

/*
* before ES6 we use var keyword for declaring a variable
* var x;
* After ES6 we use let keyword for declaring a variable
* let x;
*/

// use let to define a variable is best practise and support ES6
let varTypeLet;
var varTypevar;

// By default variable will assigned undefined. let keyword will not generate any error
console.log(varTypeLet);

// By default variable will assigned undefined. var keyword will not generate any error
//console.log(varTypeVar);

// declaring string in javaScript use single quate is common but you can use double quate 
varTypeLet = 'Mosh';
console.log(varTypeLet);

/*
* variable declaretion rules
* cannot be a reserved kyyword
* should be meaningful
* cannot start with a number or doller (1name OR $name)
* cannot contain a space or hypen (-)
* variable name are case-sensesitive (firstName and FirstName, both are different)
*/

const interestRate = 0.3;

// we cannot reassign a const
//interestRate = 1;

console.log(interestRate);

/*
* Two categories of types value what we can store inside a variable
* 1. Primitives / Value types
* 2. Reference Types
*/

/*
* In categories of Primitives / Value types we have
* 1. string
* 2. number
* 3. boolean
* 4. undefined
* 5. null
*/

let name = 'kisorniru'; //string
let age = 30; // number
let isApproved = true; // boolean
let setUndefined = undefined; //undefined
let setNull = null; //null

/*
* In categories of Reference types we have
* 1. object
* 2. array
* 3. function
*/

// object
let person = {
    name: 'kisorniru',
    age: 30
}; // object

// Bracket Notation
person['name'] = 'niru';
console.log(person['name']);

// Dot Notation
person.name = 'kisor';
console.log(person.name);

// array
let selectedColors = ['red', 'blue']; //array
selectedColors[2] = 'green';
selectedColors[3] = 1;

console.log(selectedColors);
console.log(selectedColors[0]);

// technecally array is an object in javaScript. Thats why we can use don notation for it.
console.log(selectedColors.length);

// function
function great(name, lastName) {
    // Here name is parameter
    console.log('Hello ' + name + ' ' + lastName);
}

great('John', 'Smith');
// Here John is argument

// function for calculate a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(3));
// console.log is a function and square is also a function


