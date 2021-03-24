// -Look at the examples below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(n) {
  return n + 1;
}

// - Write a Function Expression
let addOne = function (n) {
  return n + 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (n) => n + 1;

// - Write an Arrow Function with curly brackets
let addOne = (n) => {
  return n + 1;
};

// - Execute the function
addOne(11);

// - Execute the function and store the return value in a variable.
let returnValue = addOne(23);

// - What is the typeof returnValue
//  typeof is number.

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function substractOne(n) {
  return n - 1;
}

// - Write a Function Expression
let substractOne = function (n) {
  return n - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets
let substractOne = (n) => {
  return n - 1;
};

// - Execute the function
substractOne(11);

// - Execute the function and store the return value in a variable.
let returnValue = substractOne(23);

// - What is the typeof returnValue
//  typeof is "number".

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(n1, n2) {
  return n1 + n2;
}

// - Write a Function Expression
let sum = function (n1, n2) {
  return n1 + n2;
};

// - Write an Arrow Function without curly brackets(if possible)
let sum = (n1, n2) => n1 + n2;

// - Write an Arrow Function with curly brackets
let sum = (n1, n2) => {
  return n1 + n2;
};

// - Execute the function
sum(20, 30);

// - Execute the function and store the return value in a variable
let returnValue = sum(20, 30);

// - What is the typeof returnValue
// typeof is number.

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n) {
  return n * n;
}

// - Write a Function Expression
let square = function (n) {
  return n * n;
};

// - Write an Arrow Function without curly brackets(if possible)
let square = (n) => n * n;

// - Write an Arrow Function with curly brackets
let square = (n) => {
  return n * n;
};

// - Execute the function
square(10);

// - Execute the function and store the return value in a variable
let returnValue = square(10);

// - What is the typeof returnValue
// typeof is number.

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x, y) {
  return x > y ? alert(true) : alert(false);
}

// - Write a Function Expression
let isGreater = function (x, y) {
  return x > y ? alert(true) : alert(false);
};

// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x, y) => (x > y ? alert(true) : alert(false));

// - Write an Arrow Function with curly brackets
let isGreater = (x, y) => {
  return x > y ? alert(true) : alert(false);
};

// - Execute the function
isGreater(5, 2);

// - Execute the function and store the return value in a variable
let returnValue = isGreater(34, 45);

// - What is the typeof returnValue
// tr\ypeof is boolean.

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(num) {
  return num % 2 === 0 ? alert(`Even`) : alert(`Odd`);
}

// - Write an anonymous Function Expression
let oddOrEven = function (num) {
  return num % 2 === 0 ? alert(`Even`) : alert(`Odd`);
};

// - Write an named Function Expression
let oddOrEven = function oddEven(num) {
  return num % 2 === 0 ? alert(`Even`) : alert(`Odd`);
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (num) => (num % 2 === 0 ? alert(`Even`) : alert(`Odd`));

// - Write an Arrow Function with curly brackets
let oddOrEven = (num) => {
  return num % 2 === 0 ? alert(`Even`) : alert(`Odd`);
};

// - Execute the function
oddOrEven(24);

// - Execute the function and store the return value in a variable
let returnValue = oddOrEven(25);

// - What is the typeof returnValue
// typeof is "String"
